

## post submit event

- open `appFetch.js` voeg de code hieronder toe:
    > </br>![](img/postjs.PNG)
- maak de `toPhpWithPost` function aan
- zet deze helper function ook in je code:
    > </br>![](img/formtomap.PNG)

## toPhpWithPost

- zet nu het volgende in de body van `toPhpWithPost`:
    > </br>![](img/postbody.PNG)

## Testen

- open `fetch.html` in je browser
    - vul wat in het `tweede` (onderste) formulier
        - druk op `submit` en check je console:
    > </br>![](img/nicejon.PNG)


## een post versturen

Dit is wat ingewikkelder, we gebruiken weer fetch

- open `appFetch.js`
- zet het `volgende` onderaan in `toPhpWithPost`:
    > </br>![](img/fetchoption.PNG)


> #### UITLEG
> hier maken we `options` aan, die vertellen `fetch`:
> - hoe die moet gaan versturen (`POST`)
> - wat die moet versturen (`body`)
> - zie je dat we de `jsonForm` in `JSON.stringify` stoppen? dan wordt het object een string

- `console.log` de options maar eens:
    > </br>![](img/optionslog.PNG)

## posten

- nu gaan we `fetch` weer gebruiken, zet dit onder de options:
    > </br>![](img/fetchpost.PNG)'

> zie je dat we nu de `options` meegeven in `fetch`?

## testen

- open `fetch.html` in je browser
    - vul wat in het `tweede` (onderste) formulier
        - druk op `submit` en check je request:
    > </br>![](img/reqcheck.PNG)

 ## Klaar?
- commit naar je github