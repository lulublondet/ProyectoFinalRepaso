 var botonRegistraCoder = document.getElementById("btn-registrate");
 var sNombre = document.getElementById("txtNombre"),
 	 sApellido = document.getElementById("txtApellido"),
 	 sEmail = document.getElementById("txtEmail"),
 	 sContraseña = document.getElementById("txtPassword"); 

 
 
 function PowerCoder(nombre,apellido,correo,password) {
 	this.nombre = nombre;
 	this.apellido = apellido;
 	this.correo = correo;
 	this.password = password;
}

botonRegistraCoder.addEventListener("click",addCoder);

 function addCoder(){
 	var regetTexto = /^[a-zA-Z_áéíóúñ]*$/,
 	    regetCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
     

 	if(sNombre.value===""||sApellido.value===""||sEmail.value===""||sContraseña.value===""){
 			/*mensaje = document.createTextNode("Todos los campos son obligatorios!!");		
 			document.getElementById("alerta").appendChild(mensaje);*/
 			alert("Todos los campos son obligatorios")
 			return false;
 		}
 	
 	else if (sNombre.value == null || sNombre.value.length == 0|| sNombre.value.search(regetTexto)|| sNombre.value[0] !== sNombre.value[0].toUpperCase()){
 		alert("Ingrese el Nombre es Obligatorio, Recuerde la primera es Mayúscula");
 		return false;
 	   }	

    else if (sApellido.value == null || sApellido.value.length == 0|| sApellido.value.search(regetTexto)|| sApellido.value[0] !== sApellido.value[0].toUpperCase()){
 		alert("Ingrese el Apellido es Obligatorio, Recuerde la primera es Mayúscula");
 		return false;
 	}

 	else if (sEmail.value.search(regetCorreo)) {
 		alert("Ingrese un correo valido")
 		return	false;
 	}

 	else if (sContraseña.value.length < 6 || sContraseña.value.length >20){
 	alert("La contraseña debe tener entre 6 y 20 caracteres");
 		return	false;
 	}

	var entidadCoder = new PowerCoder(sNombre.value,sApellido.value,sEmail.value,sContraseña.value);
	
	sNombre.value ="";
 	sApellido.value ="";
 	sEmail.value ="";
 	sContraseña.value ="";	 	
    

 	console.log(entidadCoder);	

 	localStorage.setItem("coder", JSON.stringify(entidadCoder));
 	window.location="coderRegistrada.html";
 	return true;
};
		
