
## opruim SQL

> - je weet nu hoe we met datums kunnen rekenen
> - dat kan je ook in een where
> - je hebt je images in het verleden geplaatst
> tijd voor het opruim script

## Extra data

- voer je `inserts` nog een keer uit
    > - nu heb je weer `data` voor met `images` van `vandaag`


## opruim script
    

- maak een nieuwe file:
    - `03 opruim.sql`
        - zet daar een `delete statement` in
        - voor de `WHERE` kijk je of `uploadDateTime`:
            - `kleiner is` dan :
                - de `huidige datum` *-7* `dagen`
                > als we dit script runnen ruimen we alles op wat 7 dagen oud is

## TESTEN

- selecteer `al` je `data` in `imagetable`
        - maak een screenshot
            - sla die op in `screenshots` als `05 voor opruimen.png`
- voer je `delete` uit
        - maak een screenshot
            - sla die op in `screenshots` als `05 na opruimen.png`
- kijk of je nu `alleen` nog images hebt van `vandaag`


 ## Klaar?
- commit naar je github
