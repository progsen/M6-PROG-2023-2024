
## scripts uitrollen
 
Dit is voor workbench. Op Mac kan je HeidiSql gebruiken of mysqld in de commandprompt.

## Inloggen

Nu hebben we een `sql` script.
- open `weer.sql` in je `mysql workbench` 
> Om daar iets mee te doen moeten we `inloggen` met een `gebruiker` op de `database`:
> - de gebruiker moet `CREATE SCHEMA` rechten hebben 
> - de gebruiker moet `CREATE TABLE` rechten hebben 

- click op
</br>![](img/dbman.PNG)

- log in met de `root`
- click op `+sql`
</br>![](img/plussql.PNG)

- plak je `sql` uit je `script` in het `sql text window`
</br>![](img/paste.PNG)

- druk op de bliksum knop
</br>![](img/exe.PNG)

## CHECK!

- check of je geen fouten hebt:
</br>![](img/check.PNG)

- ga naar je schema tab
</br>![](img/schemas.PNG)

- rechter muis click en kies `refresh`

- check of je table er nu staat:
</br>![](img/ok.PNG)

## Php admin

> op deze manier kan je het later ook via `phpmyadmin` op jouw `docker` de `database` uitrollen

## Klaar?
- maak een `screenshot` van je `hele` workbench
    - sla die op in `screenshots` als `04 weer sql.png`
- commit naar je github