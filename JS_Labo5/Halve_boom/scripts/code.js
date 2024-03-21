const setup = () => {
    let p ="";
    let hoogte = 6

    for (let i = 0; i < hoogte; i++){
        p += "*"
        console.log(p);
    }
}
window.addEventListener("load", setup);