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
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" //abecedario guarda todas las letras que van con índice desde el 0=A hasta 26=Z 
//Utilizamos parseInt para convertir el número en entero.
let numeroAleatorio=parseInt(Math.random()*26); //Número aleatorio
console.log(abecedario[numeroAleatorio]);

letra="";
while (letra!=abecedario[numeroAleatorio]) {
    letra=prompt("Indica una letra").toUpperCase();    
} alert("¡Adivinaste! Es la letra -> " + abecedario[numeroAleatorio]);