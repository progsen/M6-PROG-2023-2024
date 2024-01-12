## Temp dir

We hebben nu ons bestand in de temp dir... dat willen we niet
we willen het in de `uploads` directory, BUITEN de `public`
> zo kan niemand erbij

## HOE DAN?

- open `imagereceive.php`

## opruimen

- haal even de 2 stukken code hieronder weg
    - door er commentaar van te maken
    > </br>![](img/files.PNG)

    > ![](img/savefile.PNG)

## Nieuw function
- maak daar een nieuwe `function` in:
> </br>![](img/handleFile.PNG)
- daaronder zet je:
> </br>![](img/filepick.PNG)


> #### UITLEG
> - we maken eerst een `$response` associative array aan:
>   - daarin zit een `succeeded` boolean en een `message` (voor fouten)
> - Daarna halen we de file `image` op uit `$_FILES`
> - Dan checken we of de upload gelukt is 
>   - is dat niet zo? geven we een fout terug
> - als laatst zetten we `$response` om in `json` en geven dat terug

## handleFile

En die handleFile dan?
Die is leeg daar moet nog wat in

- we maken eerst een unieke file name (Zet dit in `handleFile`):
> </br>![](img/uniqid.PNG)
- dan pakken we de `tijdelijke locatie` & maken de `extentie` aan:
> </br>![](img/loc.PNG)

- nu maken we een variable waar de NIEUWE locatie in komt:
> </br>![](img/filename.PNG)

- nu kunnen we de file verplaatsen:
> </br>![](img/move.PNG)

## testen

tijd om te testen

- open je `imageupload.html` in je browser
    - upload een plaatje
        - check je upload directory:
            > </br>![](img/uploads.PNG)
- upload nog `3` plaatjes
- maak een screenshot van je `upload` directory
    - sla die op in `screenshots` als `06 uploads.png`

    
 ## Klaar?
- commit naar je github
