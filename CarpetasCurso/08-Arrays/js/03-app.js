//Crear un arreglo de manera declarativa.
//Un objeto se puede modificar de manera declarativa o imperativa. En la manera imperativa el objeto en el que trabajamos está modificandose y en la forma declarativa se crean objetos donde se modifican los valores.
const carritoProductos=["Mochila","Poleron","Zapatillas"];
const valoresProductos=[10000, 7000, 32000];
console.log(valoresProductos);

let resultadoCarrito=[...carritoProductos,[...valoresProductos]];/*se crea declarativamente un arreglo por medio de spread operator o rest operator que contendra los datos de carritoProductos y
un arreglo que dentro tiene el arreglo de vaolres de productos.*/
console.log(resultadoCarrito);

for(var i=0;i<resultadoCarrito.length-1;i++)//se recorre el arreglo padre de la posición 0 a la 2, la posición 3 pertenece arreglo que tiene los valores de los productos.
{
    console.log(`El producto ${resultadoCarrito[i]}, tiene un valor de $${resultadoCarrito[3][i]}`);

}
//Eliminar elementos del inicio de un arreglo
carritoProductos.shift(); //eliminara mochila
console.log(carritoProductos);
//eliminar desde un indice determinado.
carritoProductos.splice(0,1)//recibe doss valores, el primero es para indicar desde que posición quieres eliminar elementos del arreglo. El segundo parametro indica cuantos elementos se deben borrar a partir de la posición entregada.
console.log(carritoProductos);

//Destructurin de arrays
var [primerValor, segundoValor]= valoresProductos;//cada valor que queramos obtener de esta forma, debe estar en la misma posición del arreglo del cual los estamos extrayendo.
console.log(segundoValor);
var[,,tercerValor]= valoresProductos;//de esta forma indicamos la posición del valor que requerimos si no necesitamos usar los demás.
console.log(tercerValor);
var[primerValor,...otros]=valoresProductos;/*otros será un arreglo que contiene todos los valores que no fueron indicados con el destructuring. 
En este caso todos menos el primer valor que es 10000*/
console.log(otros);
