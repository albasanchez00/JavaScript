// let pases=0;

// // Bucle While -> Evalua la condición, si es true (entra en el bucle), si es false (finaliza y continua a la siguiente).
// while (pases<10) { //Booleano (true/false)
//     console.log("Número de pase -> " + (pases+1)); //el +1 hace que empiece a contar desde 1
//     pases++;
// }


// // Mostrar la tabla de multiplicar
// let x=1;
// let y=1;

// while (x<10) {
//     while (y<10) {
//         console.log(x+"x"+y+"="+(x*y));
//         y++;
//     }
//     x++; //se incrementa x
//     y=1; //se inicializa y para que en la próxima vulta comience en 1
// }


// Random o aleatorio -> Devolvera un numero aleatorio entre los valores que le indiquemos (Ej: entre 1 y 100)
// let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" //abecedario guarda todas las letras que van con índice desde el 0=A hasta 26=Z 
// //Utilizamos parseInt para convertir el número en entero.
// let numeroAleatorio=parseInt(Math.random()*26); //Número aleatorio
// console.log(abecedario[numeroAleatorio]);

// letra="";
// while (letra!=abecedario[numeroAleatorio]) {
//     letra=prompt("Indica una letra").toUpperCase();    
// } alert("¡Adivinaste! Es la letra -> " + abecedario[numeroAleatorio]);


// let contador=0; 
// let numero=1;
// while (numero%2==0) {
//     console.log(par);
//     console.log();
//     console.log();
// }


/*  Bucle For   */
// Tablas de multiplicar
// console.log("***BUCLE FOR***");
// for (let x = 1; x < 10; x++) { //1
//     for (let y = 1; y < 10; y++) { //1, 2, 3, 4.....llega a 9 y se sale
//         console.log(x+"x"+y+"="+(x*y));
//     }

// }


/*  Saltos e interrupción de bucles */
// Break;
const TABLA = 9;
//Muestra la tabla de multiplicar del 9 gasta que llega 5 (9x5).
for (let contador = 1; contador <= 10; contador++) {
    console.log(`${TABLA} x ${contador}=${TABLA * contador}`);
    if (contador == 5) {
        break;
    }
}


// Salto / Continue
// Muestra los 10 primero impares que no sean múltiplos de 3.
let contadorS = 0;
let numeroS = 1;
while (contadorS < 10) {
    if (numeroS % 3 == 0) {
        numeroS++; //para que cambie el valor
        continue; //no ejecuta las siguientes líneas, sino que vuelve al  while.
    }
    if (numeroS % 2 != 0) {
        console.log("Es impar" + numeroS);
        contadorS++;
    }
    numeroS++; //se incrementa si no realiza el salto (par o impar)
}