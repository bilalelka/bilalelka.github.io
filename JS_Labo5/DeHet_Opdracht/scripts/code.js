const setup = () => {
    let inputTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let outputTekst = vervang(inputTekst, "de", "het");
    console.log(outputTekst);
}


const vervang = (bronTekst, oud, nieuw) => {
    let result= bronTekst;
    let idx= result.indexOf(oud);
    while (idx!=-1){
        result = result.slice(0, idx) + nieuw + result.slice(idx + oud.length);
        idx = result.indexOf(oud, idx + nieuw.length);
    }
    return result;
}


window.addEventListener("load", setup);