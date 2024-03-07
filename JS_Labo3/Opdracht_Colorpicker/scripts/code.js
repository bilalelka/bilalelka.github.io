const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input",update)
        sliders[i].addEventListener("change",update)
    }

}

const update = () => {
    let red = document.getElementById("sliderRed").value;
    let blue = document.getElementById("sliderBlue").value;
    let green = document.getElementById("sliderGreen").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+",+"+blue+")";

}
window.addEventListener("load", setup);