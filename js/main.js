/*function validarnombre() {
	   if (document.form.name.value.length == 0){
          alert("Debe ingresar su Nombre");
        
        } else {
            nombre = document.getElementById("name").value;
        }   
}
*/
//objeto Constructo
function Datos(nombre,apellido,correo,direccion,telefono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.direccion = direccion;
	this.telefono = telefono;

};

function mostrarData(){
	var nombre =document. getElementById("name");
	var apellido =document. getElementById("surname");
	var correo =document. getElementById("correito");
	var direccion =document. getElementById("adress");
	var telefono =document. getElementById("phone");

};