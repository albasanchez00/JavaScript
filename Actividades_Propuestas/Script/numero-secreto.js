let numUser=0; //guardará el número insertado por el Usuario
let numSecreto=parseInt(Math.random()*100+1); //Numero que tendrá que adivinar el usuario y es generado por la máquina.
let adivinar=false; //Cambiará a true cuando el usuario acierte.
console.log(numSecreto);
while (!adivinar) {
    numUser=Number(prompt("Indica el número"));
    if (numSecreto<numUser) {
        alert("El número introducido debe ser menor.")
    }else if (numSecreto>numUser) {
        alert("El número debe ser mayor.")
    }  else if (numSecreto==numUser) {
        alert("¡Enhorabuena! Has acertado el número")
        adivinar=true;  
    } else {
        alert("Introduce un dato válido....Intentelo de nuevo.")
    }
}