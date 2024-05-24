// Pedir la fecha de nacimiento al usuario
let dias = document.querySelector("#dias");
let meses = document.querySelector("#meses");
let anios = document.querySelector("#anios");

//Dias
for (let dia = 1; dia <= 31; dia++) {
    // crear un elemento en el HTML --DOM
    opcion = document.createElement("option"); //Diseñando el modelo. 
    opcion.textContent = dia; //Lo que se muestra es el valor en el documento.
    opcion.value = dia; //Valor.
    dias.appendChild(opcion);

}

//Meses
for (let mes = 1; mes <= 12; mes++) {
    opcion = document.createElement("option"); //Diseñando el modelo. 
    opcion.textContent = mes; //Lo que se muestra es el valor en el documento.
    opcion.value = mes; //Valor.
    opcion.classList.add("desplegable", "lista"); //agregar clase css
    // opcion.classList.remove() -> Remueve clase css
    opcion.setAttribute("id",mes); //agregar atributos
    meses.appendChild(opcion); //crea el elemento hijo
}

//Años
for (let anio = 2024; anio >= 2024; anio--) {
    opcion = document.createElement("option"); //Diseñando el modelo. 
    opcion.textContent = anio; //Lo que se muestra es el valor en el documento.
    opcion.value = anio; //Valor.
    anios.appendChild(opcion);
    
}
