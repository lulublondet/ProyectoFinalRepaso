window.onload = function(){

var CoderObject = JSON.parse(localStorage.getItem("coder"))
	console.log(Object.getOwnPropertyNames(CoderObject));
	console.log(CoderObject.nombre, CoderObject.apellido, CoderObject.correo, CoderObject.password);

var elementoNombre = document.getElementById("txtNombre"),
	elementoApellido = document.getElementById("txtApellido"),
	elementoEmail = document.getElementById("txtEmail"),
	elementoContrasena = document.getElementById("txtPassword");	


var nodoTextNombre = document.createTextNode(CoderObject.nombre),
	nodoTextApellido = document.createTextNode(CoderObject.apellido),
	nodoTextCorreo = document.createTextNode(CoderObject.correo),
	nodoTextPassword = document.createTextNode(CoderObject.password);

elementoNombre.appendChild(nodoTextNombre);
elementoApellido.appendChild(nodoTextApellido);
elementoEmail.appendChild(nodoTextCorreo);
elementoContrasena.appendChild(nodoTextPassword);


document.querySelector("button").addEventListener("click",function(){
	window.location = "editarPerfil.html"
} );	
	


}
