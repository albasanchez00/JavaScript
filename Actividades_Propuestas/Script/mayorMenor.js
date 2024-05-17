let boton = document.querySelector(".boton");

boton.addEventListener("click", function () {
    // Declaramos variable y las vinculamos con el HTML
    let nombre1 = document.querySelector("#nombre1");
    let edad1 = document.querySelector("#edad1");
    let nombre2 = document.querySelector("#nombre2");
    let edad2 = document.querySelector("#edad2");
    let nombre3 = document.querySelector("#nombre3");
    let edad3 = document.querySelector("#edad3");

    // Declaramos nuestras variable error
    let msnError = "";
    let error = false;
    let mC = document.querySelector(".mensaje");
    let mE = document.querySelector(".mensajeError");

    // Validar nombres
    if (nombre1.value == "" || nombre2.value == "" || nombre3.value == "") {
        console.log("validacion nombre");
        msnError = "Debe de introducir un nombre para continuar.";
        error = true;
    }
    // Validar edades
    if (edad1.value < 0 || edad1.value == "" || edad2.value < 0 || edad2.value == "" || edad3.value < 0 || edad3.value == "") {
        console.log("validacion edad");
        msnError += "<br>Debe de introducir una edad para continuar.";
        error = true;
    }

    //Mayor o Menor
    if (edad1.value > edad2.value && edad2.value > edad3.value) {
        mC.innerHTML = `${nombre1.value} es mayor que ${nombre2.value} y este es mayor que ${nombre3.value}.`
    } else if (edad1.value > edad3.value && edad3.value > edad2.value) {
        mC.innerHTML = `${nombre1.value} es mayor que ${nombre3.value} y este es mayor que ${nombre2.value}.`
    } else if (edad2.value > edad1.value && edad1.value > edad3.value) {
        mC.innerHTML = `${nombre2.value} es mayor que ${nombre1.value} y este es mayor que ${nombre3.value}.`
    } else if (edad2.value > edad3.value && edad3.value > edad1.value) {
        mC.innerHTML = `${nombre2.value} es mayor que ${nombre3.value} y este es mayor que ${nombre1.value}.`
    } else if (edad3.value > edad1.value && edad1.value > edad2.value) {
        mC.innerHTML = `${nombre3.value} es mayor que ${nombre1.value} y este es mayor que ${nombre2.value}.`
    } else if (edad3.value > edad2.value && edad2.value > edad1.value) {
        mC.innerHTML = `${nombre3.value} es mayor que ${nombre2.value} y este es mayor que ${nombre1.value}.`
    }

    //Igual que
    if (+edad1.value == +edad2.value && +edad2.value == +edad3.value) {
        mC.innerHTML = `${nombre1.value} es igual que ${nombre2.value} y este es igual que ${nombre3.value}.`
    } else if (+edad1.value == +edad3.value && +edad3.value == +edad2.value) {
        mC.innerHTML = `${nombre1.value} es igual que ${nombre3.value} y este es igual que ${nombre2.value}.`
    } else if (+edad2.value == +edad1.value && +edad1.value == +edad3.value) {
        mC.innerHTML = `${nombre2.value} es igual que ${nombre1.value} y este es igual que ${nombre3.value}.`
    } else if (+edad2.value == +edad3.value && +edad3.value == +edad1.value) {
        mC.innerHTML = `${nombre2.value} es igual que ${nombre3.value} y este es igual que ${nombre1.value}.`
    } else if (+edad3.value == +edad1.value && +edad1.value == +edad2.value) {
        mC.innerHTML = `${nombre3.value} es igual que ${nombre1.value} y este es igual que ${nombre2.value}.`
    } else if (+edad3.value == +edad2.value && +edad2.value == +edad1.value) {
        mC.innerHTML = `${nombre3.value} es igual que ${nombre2.value} y este es igual que ${nombre1.value}.`
    }
    
    //Validamos el error
    if (error) { //Si la variable error = true
        mC.innerHTML = "";
        mE.innerHTML = msnError;
    } else {
        mE.innerHTML = "";
    }


})