const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("btnSave");
    for (let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input",update)
        sliders[i].addEventListener("change",update)
    }
    update();
    btnSave.addEventListener("click",saveSwatch);

}

const update = () => {
    let red=document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML=red;

    let green=document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML=green;

    let blue=document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML=blue;

    let swatch=document.getElementById("swatch");
    swatch.style.background="rgb("+red+","+green+","+blue+")";
};

const saveSwatch = () => {
    let swatchComponents=document.getElementById("swatchComponents");
    let swatch=buildSwatchComponent();
    swatchComponents.appendChild(swatch);
}
const configureSwatch = (swatch) =>{
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);

    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);

    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};
const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target;

    let red = swatch.getAttribute("data-red");
    document.getElementById("sldRed").value = red;

    let green = swatch.getAttribute("data-green");
    document.getElementById("sldGreen").value = green;

    let blue = swatch.getAttribute("data-blue");
    document.getElementById("sldBlue").value = blue;

    update();
};

const buildSwatchComponent = () => {

    let swatch=document.createElement("div");
    let btnDelete=document.createElement("input");

    swatch.className="swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);


    swatch.appendChild(btnDelete);
    return swatch;
};
const deleteSwatch = (event) => {
    let swatchComponents=document.getElementById("swatchComponents");
    let button=event.target;
    let swatch=button.parentNode;
    swatchComponents.removeChild(swatch);
    event.stopPropagation();
};

window.addEventListener("load", setup);