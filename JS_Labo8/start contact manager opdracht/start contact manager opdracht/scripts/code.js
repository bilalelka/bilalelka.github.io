let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

  let lstPersonen = document.getElementById("lstPersonen");
  valideer();
  let elements = document.getElementsByClassName("invalid");
  if (elements.length == 0){
      let persoon = {};
      if (lstPersonen.selectedIndex == -1){
          vulPersoonOpBasisVanUserInterface(persoon); //parameter ByRef omdat het object is
          personen.push(persoon)
          voegPersoonToeAanLijstInUserInterface(persoon);
      } else{
          persoon = personen[lstPersonen.selectedIndex];
          vulPersoonOpBasisVanUserInterface(persoon);
          update
      }
  }
};
const updatePersoonInLijstInUserInterface = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");


}
const voegPersoonToeAanLijstInUserInterface = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("Option");
    option.text = persoon.voornaam + " "+ persoon.familienaam;
    option.value = persoon.email
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}

const vulPersoonOpBasisVanUserInterface = (persoon) =>{
    let txtVoornaam = document.getElementById('txtVoornaam').value;
    persoon.voornaam = txtVoornaam.value.trim();
    let txtFamilienaam = document.getElementById('txtFamilienaam').value;
    persoon.familienaam = txtFamilienaam.value.trim();
    let txtGeboorteDatum = document.getElementById('txtGeboorteDatum').value;
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value.trim());
    let txtEmail = document.getElementById('txtEmail').value;
    persoon.email = txtEmail.value.trim();
    let txtAantalKinderen = document.getElementById('txtAantalKinderen').value;
    persoon.aantalKinderen = parseInt(txtAantalKinderen.value.trim());
}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let inputVelden = document.querySelectorAll('input[type="text"]');
    inputVelden.forEach((input) => {
        input.value = '';
    });
    clearAllErrors();
};
const vulUserInterFaceOpBasisVanPersoon = (persoon) =>{
    let txtVoornaam = document.getElementById('txtVoornaam').value;
    txtVoornaam.value = persoon.voornaam;
    let txtFamilienaam = document.getElementById('txtFamilienaam').value;
    txtFamilienaam.value = persoon.familienaam;
    let txtGeboorteDatum = document.getElementById('txtGeboorteDatum').value;
    txtGeboorteDatum.value = persoon.geboorteDatum;
    let txtEmail = document.getElementById('txtEmail').value;
    txtEmail.value = persoon.email;
    let txtAantalKinderen = document.getElementById('txtAantalKinderen').value;
    txtAantalKinderen.value = persoon.aantalKinderen;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);