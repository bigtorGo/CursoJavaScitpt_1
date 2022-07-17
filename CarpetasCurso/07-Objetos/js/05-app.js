//forma de crear objetos por medio de constructores

function Producto(nombre,precio){
	this.nombre=nombre;
	this.precio=precio;
	this.dispo=true;
}

const productoConstructor= new Producto("Nitendo switch", 650000 );
console.log(productoConstructor);
//metodos para obtener las llaves de un objeto

console.log(Object.keys(productoConstructor));//Object.keys restorna un arreglo con las llaves del objeto que le pasemos como parametro.
console.log(Object.values(productoConstructor));//Object.values restorna un arreglo con los valores de las claves, que tenga el objeto que le pasemos como parametro.
console.log(Object.entries(productoConstructor));//retorna las propiedades del objeto en formato clave/valor