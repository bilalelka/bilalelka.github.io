const setup = () => {

    let btnTrigram = document.getElementById("btnTri").addEventListener("click",splitsen);

}

const splitsen = () => {
    let list = document.getElementById("lstTrigram");
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let output = "";
    let trigrams = getTrigram(tekst);
    console.log(tekst.slice(0,3));

    for (let i = 0; i < trigrams.length;i++){
        output += "<li>"+ trigrams[i] +"</li>";
    }
    list.innerHTML = output;

}
const getTrigram = (tekst) =>{
    let result =[];
    let trigram;
    for (let i=0;i<=tekst.length-3;i++){
        trigram= tekst.slice(i,i+3);
        result.push(trigram);
    }
    return result;
}
window.addEventListener("load", setup);