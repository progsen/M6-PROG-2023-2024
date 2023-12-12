
## Tijd voor insert

laten we eerst de insert in de database even oefenen:

- maak een nieuwe file:
    - `02 insert naw.sql`
- zet daar het volgende in:
    > </br>![](img/insertlines.PNG)

## testen

- test je script en kijk of alles lukt:
    > </br>![](img/insert.PNG)
- check nu de data in je table met deze select:
    > </br>![](img/selecttest.PNG)
    - resultaat:
    > </br>![](img/select.PNG)


## Naar php

Nu gaan we dit in php ook doen.
- open je `search.php`
    - include hier je `database.php` (waar je database connection/gegevens staan)
    > </br>![](img/includedb.PNG)
> Let even op het pad, zie je de `..` we gaan `relatief` naar waar `database.php` staat want die staat niet in dezelfde directory

- neem nu de code hieronder over in `search.php`
    > </br>![](img/helperfunc.PNG)

> dit is een helper function waarmee je iets wat je anders elke keer zou moeten schrijven nu op 1 plek maakt

## FindPersoon

- nu gaan we onze function maken om personen mee te zoeken:
    - neem deze code over :
    > </br>![](img/FindPersoon.PNG)

> Wat doet deze function?
> - de function heeft 2 argumenten:
>  - $conn, het mysqli connectie object
>  - $name, de zoekopdracht 
> - als de `function` fout gaat geeft het een lege lijst terug, dat is `SOMS` netjes
> - de `function` voert de query `q` uit op via het `prepared statement` patroon (hack veilig)
> - dan roept het de helper function `GetResults` aan die de `$result` in rijen met data verandered

- Maak de function werkend:
    - schrijf de query om * te selecteren uit `naw`
    - gebruik een `where` om te filteren op `naam`
        - LET OP: je zet voor de waarde niet `$name` daarin maar `?` vanwege de prepared statement

## testen

- nu nog testen, gebruik deze code
    > `LET OP`, misschien heten jullie `$user`,`$pass, etc anders, check je `database.php`
    > </br>![](img/aanroep.PNG)


> #### UITLEG
> - zie je dat we eerst de connection maken?
> - daarna geven we de connection door
> - dan maken we een variabel `$searchResults` en halen de resultaten op met `FindPersoon` en die komen dan in `$searchResults`
> - `echo json_encode`, maakt van de `$searchResults` een `JSON` text die je kan tonen

- test en controlleer of je dit krijgt:
    > </br>![](img/leraargevonden.PNG)
- zoek nu ook leraar1
    - maak een screenshot, save die als `leraargevonden.png`

## meer data


- maak een nieuwe file:
    - `03 insert naw.sql`
- zet daar 3 nieuwe personen in (verzin ze zelf)
    - gebruik geen echte data!
    
## testen

- zoek nu ook alle 3 je personen uit de `meer data` stap
    - maak een screenshot voor elke zoekactie

## JSON, MIME en headers

- je json ziet er nog niet zo uit:
    > </br>![](img/jsongood.PNG)

> dat komt omdat we onze header nog niet goed hebben gezet
> - de response komt terug als type text/html:
> </br>![](img/html.PNG) 
 
- maak van je code zodat het er zo uitziet: 
> </br>![](img/header.PNG) 

> - zie je die header daar? we zeggen nu dat de response nu `application/json` is
> </br>![](img/jsontype.PNG) 

## Testen

- zoek nog een keer, krijg je nu dit?
> </br>![](img/error.PNG) 
- zoek in je `search.php` andere naar `echo` regels dan die van de `json_encode`
    - haal die weg met commentaar `//`

- zoek nog een keer krijg je nu dit:
    > </br>![](img/jsongood.PNG)
- zoek je eigen verzonnen persoon
    - maak een screenshot en sla op in `mooiejson.png`

## Klaar?
- commit naar je github
