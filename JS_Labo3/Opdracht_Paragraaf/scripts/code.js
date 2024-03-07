const setup = () => {

    let paragraafBelangrijk = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < paragraafBelangrijk.length; i++){
        paragraafBelangrijk[i].className+=" opvallend";
    }
}
window.addEventListener("load", setup);