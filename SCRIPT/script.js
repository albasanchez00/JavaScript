/*
    Tipos de Variables


    JavaScript no obliga a definir que tipo de variable estas trabajando

*/


/*  Variables   */
nombre="Maria Rojas"; //Tipo de variable String
edad=25; //Tipo Number, no necesita comillas
espaniol=true; //Tipo Boolean, solo dos estados (true o false)
sexo=null;


/*   ¿Como puedo ver los valores sin mostrarlos en el html?   */
//  Se utiliza para ver la ejecucion o valores -> console.log (lo que quires mostrar)

console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);

/*  Operador de concatenación + une dos o más expresiones de salida */
console.log("nombre->")+typeof(nombre) +(" !");
console.log("edad->")+typeof(edad);
console.log("espaniol->")+typeof(espaniol);
console.log("sexo->")+typeof(sexo);

direccion="Calle Campo, 81";
//Simplificar las cadenas con Backticks con ${}
console.log(`Datos Personales ${nombre} Dirección ${direccion}`);
console.log("Datos Personales" + nombre + ", Dirección" + direccion);

//Si la variable numérica, podemos realizar operaciones matemáticas
console.log("El año que viene cumpliras " + (edad+1) + " años");
console.log(`El año que viene cumplirás ${edad+1} años`);

//Primera forma -> Comillas Simles
console.log('Esta es una frase de Cervantes \'En un lugar de la Mancha\'');
//Segunda forma -> Comillas Dobles
console.log("Esta es una frase de Cervantes \"En un lugar de la Mancha\"");
//Tercera forma -> Comillas Dobles y Simles
console.log("Esta es una frase de Cervantes 'En un lugar de la Mancha\'");

// Salto de línea.
console.log("Esta es una frase de Cervantes \n'En un lugar de la Mancha\'");
// Salto de línea y Tabulador horizontal.
console.log("Esta es una frase de Cervantes \n\t'En un lugar de la Mancha\'");


// Insertar Código UNICODE
// Ejemplo 1 -> Con {}.
console.log("El signo de la eternidad Armenia es \u{058D}");
// Ejemplo 2 -> Sin {}.
console.log("El signo del Bitcoin es \u20BF");


/*   Actividad Propuesta  2.4 */
console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\" , algo considerado \"lento\" en la actualidad.");

/* Tipos de datos Numéricos (number) */
altura=1.80; //El tipo de dato numérico es decimal.
diametro=2e-9;
resultado=null;
console.log(`Altura-> ${altura}`);
console.log(`Diámetro-> ${diametro}`);
console.log(altura/0); // -> Infinito
otroResultado=resultado+10;
console.log(otroResultado);

/*   Si tienes otro tipo de datos y quieres hacer una operación matemática-> NaN-> Not a nomber*/
resultado=nombre*25;
console.log(resultado); // Multiplicar, Dividir, Elevador pero con el + siempre concatena
resultado=nombre+" "+edad;
resultado=`${nombre} ${edad}`;
console.log(resultado);

/*   Tipos de Datos Boolenaos (True o False)     */
//True -> 1. / False-> 0.
valorVerdadero=true;
valorFalso=false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3- 1: ${Boolean(1)}`);     
console.log(`4- 0: ${Boolean(0)}`);

/*  Si exiten datos...Siempre va a ser true   */
// Si tiene contenido = 1 (true)
texto="Un texto de ejemplo.";
console.log(`5- texto:${Boolean(texto)}`);
// Si no tiene contenido = 0 (false)
textoVacio="";
console.log(`6- texto:${Boolean(textoVacio)}`);


/* Conversión de tipos */
masAnios="10"; //Tipo de dato -> String o cadena...
console.log(edad + masAnios); //2510
console.log(edad + Number(masAnios)); //35 -> a esto se le llama Casting.
console.log(String(edad) + masAnios); //2510

console.log(true*7); //1 x 7
console.log(9-true); //8 - 1
console.log(edad-masAnios); //Resta
console.log(edad/masAnios); //División
console.log(edad*masAnios); //Multiplicación (conversión automática)
console.log(edad**masAnios); //Exponencial
console.log(undefined/masAnios); //NaN
console.log(null*masAnios); //0


// ---------------------------------------------------- //

parrafo=document.getElementById("parrafo");
parrafo.innerHTML="Pueba de JavaScript";
// Lectura del documento...
parrafo.innerHTML="";

// Llamar a algun elemento anterior, ej parrafo (querySelector)
// parrafo=document.querySelector("parrafo");
cuadrado=document.querySelector(".cuadrado");
titulo=document.querySelector("h1");


cuadrado.innerHTML="A";

document.write("Es una prueba document.write");


//      Variables       //
var edad=25;
var edad2="veinte y cinco"

let email="j@gmail.com";
document.write("<p>"+email+"<\p>");
document.write("<p>"+edad+"<\p>");
document.write("<p>"+edad2+"<\p>");


//      Ambito de bloque        //
document.write("<br>******************************")
var mensaje1="<br>Mensaje 1"; //Declaramos nuestro mensaje.
function mostrarMensaje2(){ //Funcion que esta actuando como un bloque.
    //      Let     //
    let mensaje="<br>Mensaje dentro del bloque."; //Cambiamos el contenido de la variable.
    document.write(mensaje1); //Se sobre escribe
}
mostrarMensaje2(); //Mostramos el mensaje que devuelve la función.
document.write("<br>Mensaje fuera del bloque -> " + mensaje1) //Mensaje original.


//      Constantes      //
// Su valor nunca cambia.
const IVA=21;
let precio=50*((21/100)+1);
document.write("<br>El precio final es -> " + precio + "€");


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


