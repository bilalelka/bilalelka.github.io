const setup = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";

    let wijzigButton = document.getElementById("btnWijzig");
    wijzigButton.addEventListener("click", wijzigTekst);
}

const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Tekst gewijzigd!";
}

window.addEventListener("load", setup);
