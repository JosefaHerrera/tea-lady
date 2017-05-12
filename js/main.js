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

function mostrarData(usuario){
	var nombre =document.getElementById("name").value;
	console.log(nombre);
	var apellido =document.getElementById("surname").value;
	var correo =document.getElementById("correito").value;
	var direccion =document.getElementById("adress").value;
	var telefono =document.getElementById("phone").value;
	var boton =document.getElementById("boton").value;
	var clientes =document.getElementById("clientes");
    clientes.innerHTML += "Nombre: " + nombre.toUpperCase();
};