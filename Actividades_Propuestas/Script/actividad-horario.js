// Actividad propuesta 2.9
// Pedir al usuario un día de la semana
// let diaSem = prompt("¿Qué día desea consultar (L-D)?");
let horario="";
let botones=document.querySelectorAll(".button");
botones.forEach(elemento=>{
    elemento.addEventListener("click", function(){
        switch (elemento.value) {
            case "l": {
                horario="Lunes: 09:00 - 14:00";
                break;
            } case "m": {
                horario="Martes: 16:00 - 20:00";
                break;
            } case "x": {
                horario="Miercoles: 08:00 - 12:00";
                break;
            } case "j": {
                horario="Jueves: 19:00 - 15:00";
                break;
            } case "v": {
                horario="Viernes: 10:00 - 15:00";
                break;
            } case "s": {
                horario="Sábado: 08:00 - 13:00";
                break;
            } case "d": {
                horario="El domingo permanecerá cerrado. Disculpe las molestia.";
                break;
            } default: {
                horario="Introduzca un dato válido.";
                break;
            }
        }
        document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;
    })
})




