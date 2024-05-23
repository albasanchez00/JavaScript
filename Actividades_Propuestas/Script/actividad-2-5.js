// // Entrada a un pub-> mayor 18 años
// // Un ejemplo -> let edad=prompt("Edad");
// *****let edad=Number(prompt("Edad"));

// // Verificar que edad sea tipo de dato numérico.
// console.log(typeof(edad)); //Si esstring tengo que pasarlo a numérico
// // Si tiene más de 18 años -> edad=true
// let entrada=false; //Se inicializa en false para que nadie entre si no cumple la condicion de ser mayor de  18 años
// if (edad>=18) {
//     entrada=true;
// }

// console.log("¿Puede entrar al pub? -> " + entrada);



/***************************************/



/*  Ejemplo de if anidados, donde se declara un animal y luego se va entrando en diferentes if hasta llegar al último else... y veremos que ocurre*/

// let mascota="gato";
// if (mascota=="perro") {
//     console.log("la mascota es perro");
// }else if (mascota=="tortuga") {
//     console.log("La mascota es una tortuga");
// }else if (mascota=="canario") {
//     console.log("La mascota es una canario");
// }else{
//     console.log(mascota);
// }

// Nota -> En el ejemplo anterior no se cumple ningúna de las condiciones, y va directo al else final.

/* Si Ana tiene dinero y el articulo está en venta podrá irse de compras, sino, no irá, se quedará en casa.*/
// let dinero = (prompt("¿Tienes dinero (SI o NO)?"));
// let enVenta = (prompt("¿Está en venta ( SI o NO)?"));

// if (dinero.toLocaleUpperCase() == "SI" && enVenta.toLocaleUpperCase() == "SI") {
//     console.log("Ana puede ir de compras.");
// } else {
//     console.log("Ana se quedará en casa. Hay que ahorrar.");
// }
//Otro ejemplo-> if (dinero=="SI"&&enVenta=="SI") {
//     console.log("Ana puede ir de compras.");
// }else if (dinero=="SI"&&enVenta=="NO") {
//     console.log("Ana puede ir de compras.");
// }else{
//     console.log("Ana se quedará en casa. Hay que ahorrar.");
// }

// Estructura Switch Case
console.log("Menú Iniciado");
let letra = prompt("Indica tu opción: [c] copiar | [a] abrir | [p] pegar");
switch (letra) {
    case "a", "A":
        console.log("Se abre archivo.");
        break;
    case "c", "C":
        console.log("Se copia archivo.");
        break;
    case "p", "P":
        console.log("Se pega archivo.");
        break;
    default:
        console.log("Opción no válida.");
        break;
}