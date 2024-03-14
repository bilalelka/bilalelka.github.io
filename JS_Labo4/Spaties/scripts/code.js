const setup = () => {


   document.getElementById("btnButton").addEventListener("click",spatie);


}


const spatie= () => {
    let txtInput = document.getElementById("txtText");
    let text = txtInput.value;
    let spatie = "";

    for (let i =0;i<text.length;i++){
        spatie+=text.charAt(i);
        spatie+=" ";
    }
    console.log(spatie)

}
window.addEventListener("load", setup);