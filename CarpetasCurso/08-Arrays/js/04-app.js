//Usar foreach para recorrer arreglos más complejos

var carrito=[
    {nombre: 'Televisor 30"', precio:240000},
    {nombre: 'Tablet 8"', precio:340000},
    {nombre: 'Celular Xiaomi Lite"', precio:280000},
    {nombre: 'Joystick CXT"', precio:14000},
    {nombre: 'Mouse Razer GTX200"', precio:110000},
    {nombre: 'Lavadora somela"', precio:325999},

]
//foreach permite recorrer un arreglo y declarar un valor para el contenido que encuentre en cada iteración.
//en este caso, en cada iteración obtiene un objeto y lo asigna a producto.
carrito.forEach(function(producto){

    console.log(`El producto ${producto.nombre}, tiene un valor de $${producto.precio}`);
})
//El metodo map

/*el metodo map sirve para crear un nuevo arreglo a partir de otro que se entrega como parametro y ejecuta una función por cada
elemento en el arreglo*/

var ofertas=carrito.map(function(producto){
    
    if(producto.precio<200000)
    {
        console.log(`El producto ${producto.nombre} tiene un valor de $${producto.precio}. Este valor es inferior a 200000`);
        producto.estaEnOferta=true;
    }
    return producto;

})
console.log(ofertas);
