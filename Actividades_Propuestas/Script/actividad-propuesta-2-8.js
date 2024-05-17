let boton = document.querySelector(".boton");
//Necesitamos que cuando pulsemos en el boton, haga una condición y analice la edad.
// Para enviar un mensaje de vuelta...
//JavaScript -> Los Eventos
boton.addEventListener("click", function () {
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    //Nos trae el valor que se ha escrito en el formulario.
    // console.log(nombre);
    // console.log(edad);

    //validacion de datos
    let msnError="";
    let error=false;
    if (edad <= 12) {
        mensaje = "Niño";
    } else if (edad >= 13 && edad <= 17) {
        mensaje = "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        mensaje = "Trabajador";
    } else {
        mensaje = "Jubilado";
    }
    document.querySelector(".mensaje").innerHTML = `${nombre} tiene ${edad} años y es ${mensaje}`;
    if (edad < 0 || edad == "") {
        msnError = "La edad introducida no es valida. Ingrese la edad de nuevo.";
        document.querySelector("#edad").value="";
        error = true;
    } else if (nombre = "") {
        msnError = "<br>Ingrese un nombre"
        error = true;
    } 
    
    if (error) {
        document.querySelector(".mensajeError").innerHTML = `${msnError}`;
        document.querySelector(".mensaje").innerHTML = ""; //Borra el contenido del mensaje
    } else {
        document.querySelector(".mensajeError").innerHTML = "";//Borra el mensaje del error
        document.querySelector(".mensaje").innerHTML = `${nombre} tiene ${edad} años y es ${mensaje}`;
    }
})


