// Con un switch solicitar al usuario que tipo de operación quiere realizar (+ - * /).
let contador = 0;
let resultado = 0;
let num1 = 0;
let num2 = 0;
let opcion = 0;

do {
    opcion = prompt("Introduzca una opción -> 1(+) 2(-) 3(*) 4(/) 5(salir)")
    switch (opcion) {
        case 1:
            resultado = num1 + num2;
            prompt("El resultado de " +num1+ "+" +num2+ "=" + resultado)
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            resultado = num1 / num2;
            break;
        case 5:
            alert("¡Hasta la próxima!")
            break;
        default:
            alert("Por favor marque una opción válida.")
            break;
    }
} while (resultado == resultadoUser);
alert("¡Respuesta incorrecta!");