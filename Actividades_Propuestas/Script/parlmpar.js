let boton = document.querySelector(".boton");

boton.addEventListener("click", function () {
    let num = document.querySelector("#numero").value;
    if (num == "") {
        document.querySelector(".mensajeError").innerHTML = "Debe ingresar un número para poderle indicar si es par o impar."
    }
    if (num%2==0) {
        document.querySelector(".mensaje").innerHTML = `El número ${num} es PAR`
    }else{
        document.querySelector(".mensaje").innerHTML = `El número ${num} es IMPAR`
    }





})