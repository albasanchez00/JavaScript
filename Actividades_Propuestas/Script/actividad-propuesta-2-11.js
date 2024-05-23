// 1. Declaracion variable
// 2. while(letra)
// 3. promp indica la letra
let letra = "";

do {
    alert("Has adivinado la letra");
} while (letra != "s") {
    letra = prompt("Indique una letra.").toLowerCase();
}

