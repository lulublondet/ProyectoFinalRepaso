
var objectCoders = JSON.parse(localStorage.getItem("coder"));

	console.log(Object.getOwnPropertyNames(objectCoders));

var inputsCoders = document.getElementsByTagName("input");

inputsCoders[0].value = objectCoders.nombre;
inputsCoders[1].value = objectCoders.apellido;
inputsCoders[2].value = objectCoders.correo;
inputsCoders[3].value = objectCoders.password;

document.querySelector("button").addEventListener("click", function(){

 objectCoders.nombre = inputsCoders[0].value;
 objectCoders.apellido = inputsCoders[1].value;
 objectCoders.correo = inputsCoders[2].value;
 objectCoders.password = inputsCoders[3].value;

 localStorage.setItem("coder",JSON.stringify(objectCoders));
 window.location = "coderRegistrada.html"



})
