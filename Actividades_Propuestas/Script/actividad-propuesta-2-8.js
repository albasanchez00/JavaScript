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
    if (edad <= 12) {
        mensaje = "Niño";
    } else if (edad >= 13 && edad <= 17) {
        mensaje = "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        mensaje = "Trabajador";
    } else {
        mensaje = "Jubilado";
    }
    document.querySelector(".mensaje").innerHTML=`${nombre} tiene ${edad} años y es ${mensaje}`;
})


