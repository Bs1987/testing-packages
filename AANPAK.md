## Testen met Jest

[X] Je weet hoe je een "package.json" maakt en wat er in moet.

[X] Je weet hoe je met behulp van Jest automated tests kunt opzetten.

[X] Je weet hoe je een test in drie delen onderscheidt:

    - Arrange (klaarzetten)
    - Act (handelen)
    - Assert (beweren)
[X] Je weet hoe je de Jest "expect" functie gebruikt.

[X] Je weet hoe je de code loskoppelt van de tests.

## Stappenplan

    1. Maak een package.json aan door npm te initialiseren ("npm init")
    2. Installeer Jest met het commando "npm install jest --save-dev"
    3. Voeg de node_modules toe aan de .gitignore file
    4. Voeg "npx jest" toe aan de **test** key in de package.json en "npx jest --watch" aan de **test:watch** key
    5. Maak een map genaamd "__tests__" en stop daar jouw testbestand in ("index.test.js")
    6. Roep daarin de "test"-functie aan en geef deze een beschrijving en anonieme functie mee
    7. Test altijd eerst even of dit werkt met een "console.log" en voer het test commando uit: "npm run test"
    8. ARRANGE: Zet de waardes klaar waar je mee gaat testen
    9. ACT: Voer de functie uit en geef de gecontroleerde waardes daaran mee
    10. ASSERT: Maak een bewering over de verwachtte uitkomst en vergelijk dit met de daadwerkelijke uitkomst doormiddel van "expect" functie, met daaraan de beweringsfunctie gekoppeld zoals "toEqual"
    11. Maak een apart bestand met de gewone ".js" extentie (zoals "index.js")
    12. Plak de functies daarin en haal ze weg uit het test-bestand
    13. Exporteer de functies met "module.exports = {naam: functieNaam }"
    14. Importeer de functie met de "require"-functie die wijst naar het pad waar de functies in staan ("const add = require(("../index.js.").add)
    15. BONUS: Schrijf het netter op door destructuring te gebruiken: "const { add } = require("../index.js"))"

