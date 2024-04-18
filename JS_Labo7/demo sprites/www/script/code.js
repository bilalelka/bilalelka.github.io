const setup = () => {
	window.addEventListener("resize", updateSize);
	
	// al 1 keer op voorhand oproepen, voor het geval 
	// dat de gebruiker nooit manueel het browservenster
	// groter of kleiner maakt
	updateSize();

	let speelveld=document.getElementById("speelveld");
	speelveld.addEventListener("click", moveSprite);
}

const updateSize = () => {
	// telkens het window van grootte verandert,
	// wordt deze method opgeroepen
	// 
	// Merk op dat de <div> voor layout redenen "leeg" is,
	// omdat het enige kind absoluut gepositioneerd is. Als
	// we niets speciaals doen zal het dus 0px hoog zijn.
	// Daarom stellen we hier programmatorisch de breedte
	// en hoogte in, zodat het altijd alle ruimte inneemt.
	let speelveld=document.getElementById("speelveld");
	speelveld.style.width=window.innerWidth+"px";
	speelveld.style.height=window.innerHeight+"px";
}

const moveSprite = () => {
	// Deze function wordt opgeroepen telkens de gebruiker
	// op het speelveld klikt.

    let sprite=document.getElementsByClassName("sprite")[0];
	let speelveld=document.getElementById("speelveld");
	let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
	// clientWidht zal enkel de padding meerekenen maar niet de border,margin of scrollbar. retourneert pixels//
	// offsetWidht zal de padding,border en scrollbar maar geen margin. retourneert pixels//
	let maxHeight=speelveld.clientHeight - sprite.offsetHeight;
	
	// verplaats de sprite
	let left=Math.floor(Math.random()*maxLeft);
	let top=Math.floor(Math.random()*maxHeight);
	sprite.style.left=left+"px"; //x as
	sprite.style.top=top+"px"; // y as
}

window.addEventListener("load", setup);