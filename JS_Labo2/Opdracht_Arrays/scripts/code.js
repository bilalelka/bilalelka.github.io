const setup = () => {

    let familie = ["Bilal","Emma","Jan","Robin","Maarten"]

    console.log("Aantal familieleden: " + familie.length);

    console.log(familie[0])
    console.log(familie[2])
    console.log(familie[4])

    const voegNaamToe = (array,naam) =>{
        array.push(naam);
    }


    let extraFamilieLid = prompt("Voer een extra naam in:")
    voegNaamToe(familie,extraFamilieLid);
    console.log("Array na toevoegen extra naam: " + familie)

    let familieString = familie.join(", ")
    console.log("Array als string: " + familieString);
}



window.addEventListener("load", setup);

/*let  setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];


    console.log (familie.length);



    for (let i = 0; i < familie.length; i=i+2)
    {
        console.log("familielid " + familie[i] );
    }

    // oproepen functie (doorgeven via
    voegNaamToe(familie);

    console.log (familie.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("voeg een naam toe");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("familielid " + leden[i] );
    }

}

 */