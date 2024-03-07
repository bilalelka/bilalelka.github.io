const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //Event-based programming. Alle event handlers in setup.
    btnTry.addEventListener("mouseover",mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout",mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click",withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click",withBullets);

    document.getElementById("btnContent").addEventListener("click", changeContent);
}

//Functie mouseHover
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered! <br>"
}
//Functie onClick
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked! <br>"
}
//Functie mouseOut
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out! <br>"
}

//changeCSS: proberen css van pagina te manipuleren
// een list item heeft standaard een bullet
const withoutBullets = () => {
    //zoek in het html document elementen met die naam "li"
    //je krijgt een array terug omdat het elementS is meervoud; Dus die listItems is een array met 3elementen omdat er 3 li zijn
    let listItems = document.getElementsByTagName("li")
    for (let i = 0; i < listItems.length; i++){
        //1ste manier:
        /* listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red"
        //2de manier
        listItems[i].className = "listItemsStyleNone colorRed";*/

        //3de manier
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleBullet");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);
    }

}
const withBullets = () => {
    let listItems = document.getElementsByTagName("li")
    for (let i = 0; i < listItems.length; i++){
        //1ste manier:
        /* listItems[i].style.backgroundColor="white";
        listItems[i].style.listStyleType="disc";
        //2de manier
        listItems[i].className = "listItemsStyleBullet colorWhite";*/


        listItems[i].classList.add("listItemsStyleBullet");
        listItems[i].classList.add("colorWhite");
            console.log("output " + listItems[i].className);

    }
}

const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>Vives</a>";
    //Bij innerHTML gaat hij die tekst interpreteren. Dus hij gaat link "Vives" tonen
    // Bij tekst contenen zeg je voeg tekst toe bij de element en mag je niet interpreteren. Hij geeft dus letterlijk de tekst
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>Vives</a>";
}


window.addEventListener("load", setup);