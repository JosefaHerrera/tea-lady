function validarnombre() {
	   if (document.form.name.value.length == 0){/*toma el largo del nombre, si es igual a 0 tira la alerta*/
          alert("Debe ingresar su Nombre");
        
        } else {
            nombre = document.getElementById("name").value;
        }   
}