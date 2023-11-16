# MySQL verbinding

- Database structuur
- Voorbeeld data in het project
- .env bestand
- Verwerk het .env bestand
- Database verbinding

## Database structuur
Eerst gaan wij een tabel maken met voorbeeld data zodat wij later goed kunnen testen met een resultaat.
1. Ga naar de phpmyadmin [http://localhost:1088](http://localhost:1088) of maak via een externe tool een verbinding
2. Maak de tabel `WeersomstandighedenPerDag ` aan
3. Gebruik voor deze tabel de structuur van de vorige les

## Voorbeeld data
1. Voer minimaal 5 elementen toe in de database

## .env file
Wij gaan nu de instellingen uit de .env file verwerken in php. Eerst structureren wij het voorbeeld bestand.
1. Open .env_example en plaats de volgende regels:
    ```
    DB_HOST=
    DB_DATABASE=
    DB_USER=
    DB_PASSWORD=
    ```
2. Open nu .env en plaats de volgende regels:
    ```
    DB_HOST=mariadb
    DB_DATABASE=
    DB_USER=
    DB_PASSWORD=
    ```
3. Plaats de database gegevens uit docker-compose.yaml op de juiste plek ( MYSQL_DATABASE, MYSQL_USER , MYSQL_PASSWORD ) 

## Verwerk het .env bestand
Om de gegevens uit het .env bestand te laden moeten wij via php de juiste informatie ophalen.
1. Open `/source/database.php`
2. Start php `<?php` *( we sluiten php niet af )*
3. Maak een variabele aan voor de settings: 
```php $envSettings = []; ```
4. Controleer of het bestand aanwezig is:
```php
if (file_exists(__DIR__ . '/../.env')) {
    $envSettings = parse_ini_file(__DIR__ . '/../.env');
}
```
5. Maak een aantal constanten aan met de waardes uit .env 
```php
  define('DB_SCHEMA', (isset($envSettings['DB_SCHEMA'])) ? $envSettings['DB_SCHEMA'] : 'example');
  define('DB_USER', (isset($envSettings['DB_USER'])) ? $envSettings['DB_USER'] : 'username');
  define('DB_PASSWORD', (isset($envSettings['DB_PASSWORD'])) ? $envSettings['DB_PASSWORD'] : 'pass');
  define('DB_HOST', (isset($envSettings['DB_HOST'])) ? $envSettings['DB_HOST'] : 'mariadb');
```


## Maak een database verbinding via MySQLi
1. Verbind met de database
    ```php 
   $connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_SCHEMA); 
   ```
2. Defineer de mysql query, plaats een ? ( vraagteken ) op de plek waar een variabele moet komen
    ```php 
    $sql = 'SELECT * FROM weersomstandighedenPerDag WHERE Plaats=? ORDER BY Datum'; 
    ```
3. Bereid de query voor zodat de database server weet wat er aan gaat komen
    ```php
    $stmt = $connection->prepare($sql);
   ```
4. Geef aan wat de waarde van het vraagteken is. In dit geval een string met bijvoorbeeld 'amsterdam'
    ```php
   $stmt->bind_param('s', 'amsterdam');
    ```
5. Voor de query uit op de server
    ```php
    $stmt->execute();
    ``````
6. Haal het resultaat op
    ```php
    $result = $stmt->get_result();
    ``````
7. Verwerk nu het resultaat in een array zodat ik iets met de data kan */
    ```php
    $weersomstandigheden = mysqli_fetch_assoc($result);
   ```
8. Geef de data weer:
    ```php
    var_dump( $weersomstandigheden );
    ```

## Rond de les af
Commit het resultaat, vergeet niet om een dump van de database toe te voegen in git.
