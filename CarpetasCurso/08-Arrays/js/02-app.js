//agregar elementos al inicio o al final de un arreglo utilizando el spread operator.
var carrito = [];

// Añadir un elemento al carrito...
var producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

var producto2 = {
    nombre: 'Celular', 
    precio: 500
}
var producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);