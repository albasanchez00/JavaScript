let contador = 0;
let resultadoUser = 0;
let resultadoMaq = 0;
let sumando1 =0;
let sumando2 =0;

do {
    let sumando1 = parseInt(Math.random() * 100 + 1);
    let sumando2 = parseInt(Math.random() * 100 + 1);
    resultadoMaq = sumando1 + sumando2;
    resultadoUser = Number(prompt("Realiza la siguiente suma -> " + sumando1 + " + " + sumando2 + "=")); //=Number() identifica el valor como un numero y no como un String
    if (resultadoUser === resultadoMaq) {
        contador++;
        alert("¡Correcto!");
    }
} while (resultadoMaq==resultadoUser);
alert("¡Respuesta incorrecta!");