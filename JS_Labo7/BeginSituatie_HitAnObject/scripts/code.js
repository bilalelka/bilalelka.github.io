let global = {
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,

    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding

    score: 0,
    timeoutId: 0
};

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click",start);

};

const start = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.style.display = "none";

    let target = document.getElementById("target");
    target.addEventListener("click",klik)

    move();

}
const klik = (ev) =>{

    if (ev.target.className.indexOf("bom") != -1){
        gameOver();
    }else{
        hit();
    }
}

const move = () =>{
    let speelveld = document.getElementById("playField");
    let target = document.getElementById("target");
    let maxLeft=speelveld.clientWidth - target.offsetWidth;
    let maxHeight=speelveld.clientHeight - target.offsetHeight;
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);

    let randomGetal = Math.floor(Math.random()* global.IMAGE_COUNT);

    if (randomGetal == 0){
        target.className = "bom";
    }
    else {
        target.className = "";
    }

    target.setAttribute("src",global.IMAGE_PATH_PREFIX + randomGetal + global.IMAGE_PATH_SUFFIX);
    target.style.left=left+"px"; //x as
    target.style.top=top+"px"; // y as

    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
};

const hit = () =>{

    global.score ++
    let scoreElement = document.querySelector(".score");
    scoreElement.textContent = global.score;

    move();

}

const gameOver = () =>{

    window.prompt("GAME OVER");

    global.score = 0;
    let scoreElement = document.querySelector(".score");
    scoreElement.textContent = global.score;

    let btnStart = document.getElementById("btnStart");
    btnStart.style.display = "block";


}

window.addEventListener("load", setup);


