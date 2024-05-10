//      Actividad Propuesta 2.5     //
nombre=prompt("Escribe tu nombre");
document.write(`<br>Tu nombre es ->${nombre}`);
let confirmacion=confirm("¿Quieres salir de la prueba?");
document.write(`<br>¿Continuas o abandonas?-> ${confirmacion}`);
if(confirmacion){
    confirmacion=confirm("¿Estas seguro?");
    if (confirmacion) {
        document.write("Saliendo...");
    } else {
        document.write("<br>Me quedo");
    }
}else{
    confirmacion=confirm("¿Estas seguro?");
    if (confirmacion) {
        document.write("<br>Saliendo...");
    } else {
        document.write("<br>Me quedo");
    }
}
console.log('%c Fin del programa', 'color:blue', 'font-weight:bold;color:blue;text-decoration:underline');
