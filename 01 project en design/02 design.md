# design

We gaan weer van design naar een table werken


## Even herhalen, samen

Stel we hebben de volgende `table`:
- weersomstandighedenPerDag

Met deze `eigenschappen` (`colommen`):
- Datum
- Plaats
- aantalGraden
- windKracht
- regenInMilimeters

Hoe maken we dan de table?
<table>
<tr><th>Windows</th><th>Mac</th></tr>
<tr>
    <td>
        Gebruik "mysql workbench"</br>
        <img src="img/workbenchmodel.PNG">
        <img src="img/workbench.PNG">
    </td>
    <td>
        Gebruik "draw.io"</br> 
        <a href="https://app.diagrams.net/">https://app.diagrams.net/</a>
        <img src="img/drawiobutton.PNG"></br> 
        <img src="img/drawio.PNG">

        <a href="https://www.drawio.com/doc/faq/add-rows">rijen toevoegen</a>
        
    </td>
</tr>
</table>

## Datatypes:

laten we de `datatypes` bedenken:


> - idWeersomstandighedenPerDag => ID => `INT`
> - Datum => `Date`
> - Plaats => woorden => `varchar(120)`
> - aantalGraden => 35.5? dus met punt => `decimal`
> - windKracht => hele getallen => `INT`
> - regenInMilimeters => in milimeters, dus hele getallen =>  `INT`

En nu bedenken of de `colommen` nog `speciale regels` hebben: 

> Als je een dag in deze table zet, moeten al deze colommen gevuld worden:
> - Alles is `NN` (`NOT NULL`)
> - de `ID colom` van de `tabel`:
>       - mag `nooit leeg` zijn
>       - is altijd `boven` de `0` (geen negatieve getallen) 
>       - is `uniek`

- Zet dat in je diagram:

</br>![](img/workweer.PNG)

## Klaar?

- maak een screenshot
- sla die op als `04 weer diagram.png`
- bewaar het model als `weeroefening.mwb`
- commit naar je github