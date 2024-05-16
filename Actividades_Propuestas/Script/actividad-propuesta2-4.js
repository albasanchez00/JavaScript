//      Salida de Mensaje por Consola       //
console.error("Aquí hay un error");
console.info("Es una información");
console.warn("Esto es una advertencia");
console.log("\x1b[41m\x1b colores en la consola]")

//      Salida de mensaje       //
document.write("prueba...prueba...prueba!!!");


//      Mensajes de Confirmación        //
let confirmacion=confirm("¿Quieres salir de la prueba?");
document.write(`<br>¿El usurario quiere salir?->${confirmacion}`);
if(confirmacion){
    window.location.replace("https://google.es")
}else{
    alert("Te quedas aquí")
}


//      Mensaje de Entrada de Datos     //
nombre=prompt("Escribe tu nombre");
document.write(`<br>¿Cuál es tu nombre?->${nombre}`);