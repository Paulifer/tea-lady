function mostarData(){
	var nombre = document.getElementById("nombre").value;
    var apelido = document.getElementById("apellido").value;
    var correo = document.getElementById("email).value";
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var seleciona = document.getElementById("selector").seleaIndex;
 	
 	if(nombre === "" || apelido === "" || correo === "" || direccion === "" || telefono === "" ){
			alert("Todos los campos son obligatorios")
			return;
		}
	else if ( !selector.checked ) {
  return false;
		}
}

