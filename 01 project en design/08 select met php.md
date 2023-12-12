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
    DB_SCHEMA=
    DB_USER=
    DB_PASSWORD=
    HOSTNAME=http://localhost:88/
    SOURCE_ROOT=/var/www/html/source/
    ```
2. Open nu .env en plaats de volgende regels:
    ```
    DB_HOST=mariadb
    DB_SCHEMA=
    DB_USER=
    DB_PASSWORD=
    HOSTNAME=http://localhost:88/
    SOURCE_ROOT=/var/www/html/source
    ```
3. Plaats de database gegevens uit docker-compose.yaml op de juiste plek ( MYSQL_DATABASE, MYSQL_USER , MYSQL_PASSWORD ) 

## Verwerk het .env bestand
Om de gegevens uit het .env bestand te laden moeten wij via php de juiste informatie ophalen.
1. Open `/source/config.php`
2. Start php `<?php` *( we sluiten php niet af )*
3. Controleer of het bestand aanwezig is en stop het project wanneer dit niet het geval is.
    ```php
    if ( ! file_exists(__DIR__ . '/../.env')) {
        die('Geen .env bestand gevonden');
    }
    ```
4. Parse het .env bestand:
    ```php
    $envSettings = parse_ini_file(__DIR__ . '/../.env');
    ```
5. Maak een aantal constanten aan met de waardes uit .env 
    ```php
      define('DB_SCHEMA', (isset($envSettings['DB_SCHEMA'])) ? $envSettings['DB_SCHEMA'] : 'example');
      define('DB_USER', (isset($envSettings['DB_USER'])) ? $envSettings['DB_USER'] : 'username');
      define('DB_PASSWORD', (isset($envSettings['DB_PASSWORD'])) ? $envSettings['DB_PASSWORD'] : 'pass');
      define('DB_HOST', (isset($envSettings['DB_HOST'])) ? $envSettings['DB_HOST'] : 'mariadb');
      define('HOSTNAME', (isset($envSettings['HOSTNAME'])) ? $envSettings['HOSTNAME'] : 'mariadb');
      define('SOURCE_ROOT', (isset($envSettings['SOURCE_ROOT'])) ? $envSettings['SOURCE_ROOT'] : 'mariadb');
    ```
Definieer in dit bestand ook de andere constantes die nodig hebt voor bijvoorbeeld de hostname en de source_root.

## Maak een database verbinding via MySQLi
1. Open `/source/database.php`
2. De instellingen zijn al geladen in de index
3. Start php `<?php` *( we sluiten php niet af )*
4. Maak een database verbinding functie
    ```php
   function database_connect()
   {
      
   }
   ``` 
4. Verbind met de database in deze functie
    ```php 
   $connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_SCHEMA); 
   ```
   Je kunt ook een controle toevoegen of de verbinding is geslaagd:
   ```php
   if ($connection->connect_errno) {
      die( 'Failed to connect to MySQL: ' . $connection->connect_error );
   }
   ```
5. Zorg dat deze functie de database verbinding terug geeft
   ```php
   return $connection;
   ```

## Haal gegevens op uit de database
1. Open index.php
3. Start php `<?php` *( we sluiten php niet af )*
4. Require de config.php
   ```php 
   require_once '../source/config.php';
   ```
5. Require de database.php. Hiervoor kun je nu de constante SOURCE_ROOT gebruiken uit het .env bestand
   ```php 
   require_once SOURCE_ROOT . 'database.php';
   ```
6. Haal de database verbinding op
   ```php
   $connection = database_connect();
   ```
7. Maak een variabele aan voor de plaats, dit is straks een criteria om data op te halen.
   ```php
   $plaats = 'amsterdam';
   ```
8. Defineer de mysql query, plaats een ? ( vraagteken ) op de plek waar een variabele moet komen
    ```php 
    $sql = 'SELECT * FROM weersomstandighedenPerDag WHERE Plaats=? ORDER BY Datum'; 
    ```
6. Bereid de query voor zodat de database server weet wat er aan gaat komen
    ```php
    $stmt = $connection->prepare($sql);
   ```
7. Geef aan wat de waarde van het vraagteken is. In dit geval een string met bijvoorbeeld 'amsterdam'
    ```php
   $stmt->bind_param('s', 'amsterdam');
    ```
8. Voor de query uit op de server
    ```php
    $stmt->execute();
    ```
9. Haal het resultaat op
    ```php
    $result = $stmt->get_result();
    ```
10. Verwerk nu het resultaat in een array zodat ik iets met de data kan */
    ```php
    $weersomstandigheden = mysqli_fetch_assoc($result);
    ```
11. Geef de data weer:
    ```php
    var_dump( $weersomstandigheden );
    ```

## Meerdere resultaten
Je hebt nu maar één resultaat opgehaald, zou je er ook meer kunnen weergeven?

## Rond de les af
- maak een screenshot van je resultaten in je browser
  - sla die op in `screenshots` als `08 weerdata browser.png`   
  - Dus waar je je weerdata kan zien
- Commit het resultaat, vergeet niet om een dump van de database toe te voegen in git.
