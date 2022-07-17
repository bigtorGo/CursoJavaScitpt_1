//creación de objeto literal
const producto={
	nombre: "Monitor 20 pulgadas",
	precio:120000,
	disponible: true,
    unidades:30

}

console.log(producto);
console.log(producto.nombre);
console.log(`Valor del producto $ ${producto.precio}`);
console.log(producto['nombre']);//otra forma de acceder a las propiedades del obj

//agregar nuevas propiedades al objeto
producto.marca= "Samsing";
//eliminar propiedad del producto
delete producto.unidades;
console.log(producto);

var nombre=producto.nombre;//antigua forma de obtener y asignar los valores de la propiedad de un objeto
console.log(nombre);
const {precio}=producto;// Destructuring. la variable se crea con el nombre de la cual queremos acceder.
console.log(precio);
const {unidades,disponible}=producto;
console.log(unidades);
console.log(disponible);

//objeto dentro de otro
var producto2={
	nombre: "Notebook Asus",
	precio:450000,
	disponible: true,
	unidades:10,
	ubicacion:{
		pasillo:20,
		estanteria:'A',
		casillero:6
	
	}

}
console.log(producto2.ubicacion);
console.log(`El producto se almacena en el casillero ${producto2.ubicacion.casillero}`);
