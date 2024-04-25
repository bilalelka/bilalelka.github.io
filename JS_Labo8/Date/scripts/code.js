const setup = () => {

    let start = new Date(); //system date dit is de datum van je operating systeem(zehma je pc)
    console.log(start)





    // Geeft de dag van de week (zondag is 0 vrijsag is 5)
    console.log((start.getDay()));
    //maand moet je +1 doen omat januarie 0 is
    console.log(start.getMonth() +1 );
    //jaar
    console.log(start.getFullYear());
    //dag
    console.log(start.getDate());

    console.log(start.getDay() + "-" +  (start.getMonth() +1) + "-" + start.getFullYear() + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date (2024, 0,1)
    console.log(datum);

    let event = new Date()

    console.log("toString" + event.toString());

    // ISO het is eerde een notatieconventie voor het weergeven van tijdstippen
    console.log("toISOString" + datum.toISOString());

    console.log("toDateString" + event.toDateString());

    console.log("toTimeString" + event.toTimeString());

}
function berekenLeeftijdInDagen(geboorteDatum) {
    // Huidige datum
    let huidigeDatum = new Date();

    // Bereken het verschil in milliseconden tussen de huidige datum en de geboortedatum
    let verschilInTijd = huidigeDatum.getTime() - geboorteDatum.getTime();

    // Converteer milliseconden naar dagen
    let leeftijdInDagen = Math.floor(verschilInTijd / (1000 * 3600 * 24));

    return leeftijdInDagen;
}

// Geboortedatum (jaar, maand (0-indexed), dag)
let geboorteDatum = new Date(2002, 2, 24); // Bijvoorbeeld 1 mei 1990

// Roep de functie aan en geef de geboortedatum mee als argument
let leeftijdInDagen = berekenLeeftijdInDagen(geboorteDatum);

console.log("Leeftijd in dagen: " + leeftijdInDagen);

function bepaalGeboorteDag(geboorteDatum) {
    // Array van dagen van de week
    let dagenVanDeWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

    // Haal de dag van de week op (0-indexed, waarbij 0 zondag is)
    let dagIndex = geboorteDatum.getDay();

    // Gebruik de index om de juiste dag uit de array te halen
    let geboorteDag = dagenVanDeWeek[dagIndex];

    return geboorteDag;
}

// Geboortedatum (jaar, maand (0-indexed), dag)
let geboorteDatum = new Date(2002, 2, 24); // Bijvoorbeeld 1 mei 1990

// Roep de functie aan en geef de geboortedatum mee als argument
let dagVanGeboorte = bepaalGeboorteDag(geboorteDatum);

console.log("Je bent geboren op een " + dagVanGeboorte);


window.addEventListener("load", setup);