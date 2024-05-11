const setup = () => {
    let btnButton = document.getElementById("btnGo");
    btnButton.addEventListener("click", voerCommandoUit);

    let history = JSON.parse(localStorage.getItem("history"));
    if(history){
        for (let i = 0 ; i<history.length; i++){
            createCardAndAppend(history[i].title, history[i].commando,history[i].url);
        }
    }

}

const voerCommandoUit = () => {
    let txtCommandoInput = document.getElementById("txtCommando");
    let command = txtCommandoInput.value;
    let regex = command.match("\/[a-z]{1} [a-z]*");
    if (regex != null){
        let commandPrefix = command.slice(0,2);
        if (commandPrefix === '/g'){
            google(command.slice(3));
        }else if (commandPrefix === '/y'){
            youtube(command.slice(3));
        }
        else {
            alert("unknown command prefix");
        }
        txtCommandoInput.value = "";

    }else{
        alert("u hebt niets ingevuld, gelieve iets in te vullen")
    }
}
const google = (commandSuffix) =>{
    let url = "http://www.google.com/search?q=" + commandSuffix
    window.open(url, '_blank');
    createCardAndAppend("Google", commandSuffix, url);
    saveLocalStorage("Google", commandSuffix, url);
}
const youtube = (commandSuffix) =>{
    let url = "http://www.youtube.com/results?search_query=" + commandSuffix
    window.open(url, '_blank');
    createCardAndAppend("Youtube", commandSuffix, url);
    saveLocalStorage("Youtube", commandSuffix, url);
}
const instagram = (commandSuffix) =>{
    let url = "http://www.instagram.com/explore/" + commandSuffix
    window.open(url, '_blank');
    createCardAndAppend("Instagram", commandSuffix, url);
    saveLocalStorage("Instagram", commandSuffix, url);
}


const saveLocalStorage = (title, commando, url) => {
    let history

        let historyItem = {
            title: title,
            commando: commando,
            url: url
        };
        history = JSON.parse(localStorage.getItem("history"));
        if (!history) {
            history = [];
        }
        history.push(historyItem)
        localStorage.setItem("history", JSON.stringify(history));
}

const createLinkButton = (url) => {
    let link = document.createElement("a");
    link.classList.add("btn", "btn-primary");
    link.textContent = "Go!";
    link.href = url;
    link.target = "_blank";
    return link;
}


const createElementWithClassName = (element,className) => {
    let e = document.createElement(element);
    e.setAttribute("class",className);
    return e;

}
const createElementWithClassNameAndText = (element, className, text) =>{
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}
const createCardAndAppend = (title,commando,url) => {
    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLocaleLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-body")
    let cardTitle = createElementWithClassNameAndText("h5","card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commando);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLocaleLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
}
window.addEventListener("load", setup);