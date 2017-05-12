/*function validarnombre() {
	   if (document.form.name.value.length == 0){
          alert("Debe ingresar su Nombre");
        
        } else {
            nombre = document.getElementById("name").value;
        }   
}
*/
//objeto Constructor
/*function Datos(nombre,apellido,correo,direccion,telefono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.direccion = direccion;
	this.telefono = telefono;*/


function mostrarData(){
	var nombre =document.getElementById("name").value;
	console.log(nombre);
	var apellido =document.getElementById("surname").value;
	var correo =document.getElementById("correito").value;
	var direccion =document.getElementById("adress").value;
	var telefono =document.getElementById("phone").value;
	var clientes =document.getElementById("clientes");
	var pack= document.getElementById("pack").value;

	if(nombre=="" || apellido=="" || correo=="" || direccion=="" || telefono=="" || pack==""){
		alert("Debe ingresar datos");
	}else{
	//var uno =document.getElementById("boton1").value;
    clientes.innerHTML +=(" ♥ "+"<br> NOMBRE: " + nombre.toUpperCase()+ "<br> APELLIDO: " + apellido.toUpperCase()+ 
    "<br> CORREO: " + correo.toUpperCase() + "<br> DIRECCIÓN: "+ direccion.toUpperCase() + "<br> TELÉFONO: " + telefono.toUpperCase()) + "<br> ♥ " + pack.toUpperCase();
	}
};