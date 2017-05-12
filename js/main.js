/*function validarnombre() {
	   if (document.form.name.value.length == 0){
          alert("Debe ingresar su Nombre");
        
        } else {
            nombre = document.getElementById("name").value;
        }   
}
*/
//objeto Constructor
function Datos(nombre,apellido,correo,direccion,telefono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.direccion = direccion;
	this.telefono = telefono;

};

function mostrarData(){
	nombre =document.getElementById("name").value;
	console.log(nombre);
	apellido =document.getElementById("surname").value;
	correo =document.getElementById("correito").value;
	direccion =document.getElementById("adress").value;
	telefono =document.getElementById("phone").value;
	var clientes =document.getElementById("clientes");
	var pack= document.getElementById("pack");
    clientes.innerHTML +=( "<br> Nombre: " + nombre.toUpperCase()+ "<br> Apellido: " + apellido.toUpperCase()+ 
    	"<br> Correo: " + correo.toUpperCase() + "<br> Direccion: "+ direccion.toUpperCase() + "<br> Telefono: " + telefono.toUpperCase());
};