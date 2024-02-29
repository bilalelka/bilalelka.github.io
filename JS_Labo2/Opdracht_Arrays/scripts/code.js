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