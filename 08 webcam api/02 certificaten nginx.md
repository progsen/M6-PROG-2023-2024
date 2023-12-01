
## naar de NGINX container

#### UITLEG
> nu moeten deze certificaten naar de NGINX container
> daarvoor moeten deze de container in laten kopieeren

- open je `docker-compose.yml`
    - voeg het volgende toe:
        > </br>![](img/compose.PNG)
- pas ook je `ports` aan
    - `- 881:443` moet erbij (zie plaatje hierboven)
        > </br>![](img/ports.PNG)

## container opnieuw

- delete je container 
> </br>![](img/delete.PNG)
- `docker compose` je container weer
- maak je `tables` opnieuw


## TESTEN

We gaan nu testen of we bij onze https kunnen
- click op de `881:443`
> </br>![](img/openhttps.PNG)
- je krijgt misschien een `400`:
> </br>![](img/400.PNG)
- maak van je url `https`:
> </br>![](img/https.PNG)

## WARNING

omdat deze certificaten niet goed zijn krijg je warnings.
- voeg een tijdelijke uitzondering toe (het is ons eigen certificaat)
- test nogmaals:
> </br>![](img/warning.PNG)
    


 ## Klaar?
- commit naar je github
