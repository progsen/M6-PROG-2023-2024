~~## Search with a keyword

Als bezoeker wil ik kunnen zoeken op een gedeeltelijke zoekterm zodat ik makkelijker een resultaat kan krijgen.


## Search LIKE
In search.php zoek je nu op een complete sting. Je kunt MYSQL ook laten zoeken op een gedeelte van een string. Hierbij geef je aan wat bekend is en wat niet bekend is.
Dit is de huidige query
```sql
SELECT * FROM WeersomstandighedenPerDag WHERE Plaats=? ORDER BY Datum
```
Voor het vergelijken van een gedeelte van een string gebruik je `LIKE` in plaats van het `=` teken in je query:
```sql
'SELECT * FROM table_name WHERE Plaats LIKE ? ORDER BY ...';
```
Als je zeker weet dat het begin goed is, maar het eind is optioneel dan moet je de parameter zo vormgeven:
```php
$plaats =  $_GET['zoeken'] . '%';
```
Of andersom als het begin optioneel is dan plaats je het percentage teken voor de string:
```php
$plaats =  '%' . $_GET['zoeken'];
```
Natuurlijk kun je dit ook combineren.

## Probeer het maar even uit.

 ## Klaar?
- commit naar je github~~
