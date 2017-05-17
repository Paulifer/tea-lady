function mostarData(){
	var nombre = document.getElementById("nombre").value;
    var apelido = document.getElementById("apellido").value;
    var correo = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var seleciona = document.getElementById("selector").value;
 	
 	if(nombre == null || apelido == null || correo == null || direccion == null || telefono == null ){
			alert("Todos los campos son obligatorios");
			return true;
		}

}

