const setup = () => {

alert("Dit is een voorbeeld van een alert popup");

let confirmResult = confirm("Dit is een voorbeeld van een confirm popup.");
console.log("Return value van confirm:", confirmResult);

let promptResult = prompt("Dit is een voorbeeld van een prompt popup.");
console.log("Return value van prompt :", promptResult);


}
window.addEventListener("load", setup);