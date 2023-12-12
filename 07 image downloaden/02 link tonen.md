
## We hebben de link


- open je `imageupload.html` in je browser
    - zet daar een nieuw element in:
        - `a` , met id `link`

## JS

> nu moeten nu de `response` die we in javascript krijgen gaan lezen
- open `appImg.js`
- ga naar de fetch code daar heb je dit staan:
    > </br>![](img/fetch.PNG)
- we moeten nu iets met die `json` doen, maak een nieuwe `function` aan:
    > </br>![](img/showlink.PNG)
- roep nu `showlink` alvast aan:
    > </br>![](img/showlinkadd.PNG)


## ShowLink

> nu moeten we onze `a` by id selecteren en dan daar de link inzetten 
> - zorg dat de `text` wordt: `"Download het plaatje"`

- doe dit in de `showlink` function:
    - HINTS:
        - `document.getElementById`
        - `textContent`
        - `setAttribute("href",...)`

## testen

- upload een plaatje, check of je de link nu te zien krijgt:
    > </br>![](img/download.PNG)

- click op de link, dat zou nog niet helemaal moeten werken:
    > </br>![](img/notfound.PNG)

    
## QR code

- probeer nu ook een QR code te genereren
    - gebruik bijvoorbeeld deze library
        - https://github.com/davidshimjs/qrcodejs/tree/master
        - lees de `README` om uit te zoeken hoe het moet
        - je hebt een element nodig waarin de qrcode libary kan werken
            - bijvoorbeeld een `p`
    > </br>![](img/qrcode.PNG)

 ## Klaar?
- commit naar je github
