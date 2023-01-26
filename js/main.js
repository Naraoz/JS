const nombre = prompt("Por favor, escriba su nombre");

const apellido = prompt("Ahora, escriba su apellido");

if (nombre != "" && apellido != "") {
  alert("Bienvenido a nuestro sitio " + nombre + " " + apellido);
} else {
  alert("Por Favor ingrese el nombre y el apellido para continuar");

  const nombre = prompt("Por favor, escriba su nombre");

  const apellido = prompt("Ahora, escriba su apellido");

  alert("Bienvenido a nuestro sitio " + nombre + " " + apellido);
}

const edad = parseInt(prompt("Por favor ingrese su edad"));

while (edad < 18) {
  alert("Necesita ser mayor de 18 años para ingresar");
  edad = parseInt(prompt("Por favor ingrese nuevamentes su edad"));
}

console.log(edad);
