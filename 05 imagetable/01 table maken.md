## Image table voor BO

Voor BO gaan jullie iets met webcams doen. Daarvoor is het leuk als daar ook foto's mee genomen kunnen worden.
Die moeten dan in een database ^^. tijd om een table te maken



## groepen

we gaan deze opdracht:
- zelf beginnen
- dan uitwisselen met andere in groepen

## designen

- design zelf een table en denk na over welke metadata je van een foto wil bewaren:
    - `LET OP`! we zetten `niet` de `BYTES` (de foto zelf) in de `table`, die komt op de `hardeschijf`
- maak het design met een design tool zoals de `ERD designer` van `Mysql workbench`
- zorg dat je over de `datatypes` nadenkt en die meeneemt
- de design moet zo compleet mogelijk zijn!

## uitwisselen

- `wissel` nu met de studenten in je groep je `design` uit.
- bespreek met zijn alle de designs `1 voor `1 van de studenten
- maak nu als groep 1 `final` design
    - neem hier de `goede` dingen van de designs mee zodat jullie de beste table krijgen

## script

- iedereen doet nu zelf:

    - maak een `script` van de design 
        - sla deze op in `01 imagetable.sql`


## automatische date time

- als je nog geen `uploaddatetime` had gaan we die nu maken:
    - maak een nieuwe colom in je `imagetable` in `01 imagetable.sql`:
        - noem deze `uploadDateTime` met de volgende eigenschappen:
            > - deze heeft een `DateTime` als datatype
            > - deze is `NOT NULL`
            > - deze is `NOT NULL`
            > - deze heeft achter aan het volgende staan:
            >   - ` DEFAULT CURRENT_TIMESTAMP`

> met ` DEFAULT CURRENT_TIMESTAMP` zeggen we als er `geen` waarde in de `insert` of `update` staat:
> - haal dan de `huidige tijd` op
> - `gebruik` die als `waarde`
> Dit lijkt een beetje op `AUTO_INCREMENT`  
> Je kan ook `andere types` *( bijvoorbeeld INT)* een `default waarde` geven

## uitrollen

- rol je script uit in je `docker database` voor `BO` en voor `m6prog`

 ## Klaar?
- commit naar je github
