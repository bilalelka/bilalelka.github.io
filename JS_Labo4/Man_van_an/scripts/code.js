const setup = () => {
    let txtTekst = document.getElementById("txtTekst");
    let tekst = txtTekst.value;
    let txtZoek = document.getElementById("txtZoek");
    let zoek = txtZoek.value;
    let txtAantal = document.getElementById("txtAantal");

    let aantal = telAantal(tekst, zoek);
    txtAantal.textContent = aantal;
}

const telAantal = (tekst,zoek) => {
    let result = 0;
    let idx=tekst.indexOf(zoek);
    while (idx!=-1) {
        result++;
        idx=tekst.indexOf(zoek, idx+zoek.length);
    }
    return result;
}


window.addEventListener("load", setup);