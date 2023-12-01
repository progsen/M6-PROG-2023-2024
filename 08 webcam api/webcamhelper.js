

// This code is adapted from
// https://cdn.rawgit.com/Miguelao/demos/master/imagecapture.html


export class WebCamHelper
{

    constructor()
    {
        
    this. imageCapture = null;
    this. mediaStream = null;
    this. deviceInfosArray=[];
    this.ready=false;
    }
    checkSecureContext()
    {
        var isSecureOrigin = location.protocol === 'https:' ||
        location.host === 'localhost';
        if (!isSecureOrigin) 
        {
            alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
                '\n\nChanging protocol to HTTPS');
            location.protocol = 'HTTPS';
        }
    }

    startApi()
    {
        this.checkSecureContext();
        navigator.mediaDevices.enumerateDevices()
        .then((deviceInfos )=> 
        {
            this.deviceInfosArray= deviceInfos;
        })
        .catch(error => 
        {
            console.log('enumerateDevices() error: ', error);
        })
        .then(()=>
        {
            this.getStream();
        });
    }

     getStream() 
    {
        if (this.mediaStream) 
        {
            this.mediaStream.getTracks().forEach(track => 
            {
                track.stop();
            });
        }
        let videoSource = [0].deviceId;
        let  constraints = 
        {
            video: {deviceId: this.deviceInfosArray[0].deviceId ? {exact: videoSource} : undefined}
        };
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream)=>{this.gotStream(stream)})
            .catch(error => 
            {
                console.log('getUserMedia error: ', error);
            });
    }

     gotStream(stream) 
    {
      console.log('getUserMedia() got stream: ', stream);
      this.mediaStream = stream;
      this.imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
      this.ready=true;
    }
    async GrabFrameToCanvas(imageBitmap,canvasid)
    {
        this. canvas= document.getElementById(canvasid);

        console.log('Grabbed frame:', imageBitmap);
        this.canvas.width = imageBitmap.width;
        this.canvas.height = imageBitmap.height;
        this.canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
        let imageBlob = await new Promise(resolve => this.canvas.toBlob(resolve, 'image/png'));
        return imageBlob;
    }

    GrabFrame(complete)
    {
       this. imageCapture.grabFrame().then(function(imageBitmap) 
        {
            complete(imageBitmap);
        });
    }
}