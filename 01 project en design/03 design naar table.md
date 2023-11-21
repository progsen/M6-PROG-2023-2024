
## SQL schrijven

Omdat je soms ook SQL moet kunnen gaan we deze keer de CREATE table zelf schrijven.

- Maak een `sql` file aan:
    - `weer.sql`
- we beginnen met een nieuwe database dus:
</br>![](img/schema.PNG)

> #### UITLEG
> - `CREATE SCHEMA ...` maakt een nieuw schema (database)
> - `use ...` selecteerd dat schema (anders kan de database de tabellen niet vinden)

## CREATE TABLE

nu gaan we de table schrijven:

- Begin met het schrijven van:
</br>![](img/table.PNG)

> zie je die haakjes `()` daar moet alles tussen
>   - `colommen`, `datatypes`
>   - `primary keys`
>   - `indices` (sneller zoeken)


## COLOMMEN

> voorbeeld  
> de ID colom: 
> </br>![](img/idcol.PNG)
> het patroon is dus:
> - `NAME` (idWeersomstandighedenPerDag)
> - `DATATYPE` (`INT`) en in ons geval gevolgd door `UNSIGNED`
> - Mag het leeg zijn? (`NULL` of `NOT NULL`)
> - omdat we een `primary key` als `INT` hebben en we die niet zelf willen vullen zetten we er `AUTO_INCREMENT` achter

- neem deze hieronder nu over:
</br>![](img/date.PNG)

- schrijf nu zelf de andere colommen:
   - `windKracht`  
   - `regenInMilimeters`  
   - `plaats`  


## PRIMARY KEY

Nu alle colommen gedaan zijn, komen we bij het laatste stukje:  
*De primary key(s) en indices*

- tik deze over:
</br>![](img/primary.PNG)
> HINT: er moet we een `,` achter de laatste colom staan!


## Klaar?

- commit naar je github