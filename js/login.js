var botonLogin = document.getElementById("btn-login");
var objectCoders = JSON.parse(localStorage.getItem("coder"));
	console.log(Object.getOwnPropertyNames(objectCoders));
var sEmail = document.getElementById("txtEmail"),
	sPassword = document.getElementById("txtPassword");

botonLogin.addEventListener("click",verify)

function verify (){

if(sEmail.value == objectCoders.correo &&  sPassword.value == objectCoders.password) {
	alert("Tus datos son correctos");
	window.location ="coderRegistrada.html";
}

else {
	alert("lo sentimos no eres coder aún, registrate!");
	window.location = "coder.html";
}
}