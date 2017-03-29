var botonRegistrarCoder = document.getElementById("btn-registrate");
var botonIniciaSesion = document.getElementById("btn-iniciaSesion");

botonRegistrarCoder.addEventListener("click", registerCoder);
botonIniciaSesion.addEventListener("click", logIn )

function registerCoder() {
	window.location="coder.html";
};


function logIn(){
	window.location = "login.html"	
};