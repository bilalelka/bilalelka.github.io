const setup = () => {
    let btnKlik = document.getElementById("btnKlik").addEventListener("click",vervang)
}

let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
const vervang = () => {
    let woorden = zin.split(" ");

    for (let i = 0 ; i <woorden.length; i++){
        if (woorden[i] === "de") {
            woorden[i] = "het";
        }
    }
    var nieuweZin = woorden.join(" ");
    return nieuweZin;
}
console.log("Originele zin:", zin);
console.log("Gecorrigeerde zin:", vervang(zin));

window.addEventListener("load", setup);