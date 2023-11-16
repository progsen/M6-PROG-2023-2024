
## Opslaan die hap!

- open `imagereceive.php`

- maak daar een nieuwe `function` in:
> </br>![](img/insertimage.PNG)
- vul de function in zodat:
    - deze de `data` in je `database` zet!
    - gebruik `prepared statements`
    - vergeet je `database.php` niet!
- Check of je `$stmt->execute gelukt` is:
    - hier komt een `boolean` uit, die `true` is als alles goed ging
> </br>![](img/execute.PNG)

- zorg dat die `boolean` in de `$response` komt:
    - denk aan je `return(s)`
    > </br>![](img/success.PNG)


## TESTEN
- Controlleer of je nu rijen in je datatable krijgt:
    > </br>![](img/plaatjes.PNG)
- en of je `succeeded` ook in je `browser` op true staat:
    > </br>![](img/jsonok.PNG)


    
 ## Klaar?
- commit naar je github
