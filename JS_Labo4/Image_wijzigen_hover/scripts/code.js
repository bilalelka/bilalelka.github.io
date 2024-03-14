const setup = () => {
   document.getElementById("imgCat1").addEventListener("mouseover",changeImage);


    
}

const changeImage = () => {
    let text = document.getElementById("txtText").innerHTML = "Andere text";
    let imageCat = document.getElementById("imgCat1");
    imageCat.src = "./images/cat3.jpg";
    imageCat.alt = "cat3"
    imageCat.className = "sizePhoto";

}
window.addEventListener("load", setup);