const setup = () => {
    let txtLetter = document.getElementById("txtLetter").addEventListener("input",);
    let letter = txtLetter.value;
    let kip = document.getElementById("kip").addEventListener("change", toonKip);
}

const toonKip = () => {
    let kipAfbeelding = document.getElementById("img");
    let kipOptie = document.getElementById("kip").value;
    let note = document.getElementById("note");

    if (kipOptie === "Met een ei"){
        kipAfbeelding.classList.remove("hidden");
        kipAfbeelding.style.backgroundImage = "url('../img/with-egg.png')";
        note.textContent = "kip met een ei"
    } else if (kipOptie === "Zonder een ei"){
        kipAfbeelding.classList.remove("hidden");
        kipAfbeelding.style.backgroundImage = "url('../img/without-egg.png')";
        note.textContent = "kip zonder ei"
    }
    kipAfbeelding.classList.remove("hidden");
}
window.addEventListener("load", setup);