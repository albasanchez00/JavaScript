let bombilla=document.querySelector("#bombilla");
let interruptor=false;

bombilla.addEventListener("click", function(){
    if (interruptor) { //Si esta encendido (true)
        bombilla.src="bombilla-off.gif"
    interruptor=false;
} else {
    bombilla.src="bombilla-on.gif"
    interruptor=true;
    }
})