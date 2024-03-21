const setup = () => {
    let btnToon = document.getElementById("btnToon").addEventListener("click", resultWeergeven);
}


const resultWeergeven = () => {
    let isRoker = document.getElementById('chkBox').checked ? 'is roker' : 'is geen roker';

    let moedertaal;
    let taalElementen = document.getElementsByName('taal');
    for (let i = 0; i < taalElementen.length; i++) {
        if (taalElementen[i].checked) {
            moedertaal = taalElementen[i].nextElementSibling.textContent.trim();
            break;
        }
    }


    let buurland = document.getElementById('buurland').value;

    let bestelling = [];
    let selectElement = document.getElementById('sltFood');
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            bestelling.push(selectElement.options[i].textContent.trim());
        }
    }
    let resultaatTekst = `${isRoker}<br>moedertaal is ${moedertaal}<br>favoriete buurland is ${buurland}<br>bestelling bestaat uit:`;
    bestelling.forEach(item => {
        resultaatTekst += item + " ";
    });
    document.getElementById('resultaat').innerHTML = resultaatTekst;

}
window.addEventListener("load", setup);