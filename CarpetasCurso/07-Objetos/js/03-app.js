"use strict";//n
console.clear();
const otroProducto={
    nombre:"Monitor 21 pulgadas",
    precio:50000,
    disponible:true
}
//Object.freeze(otroProducto);
//intentar modificar un objeto congelado dará un error
if(Object.isFrozen(otroProducto)){
    console.log("El objeto está en modo de solo lectura");
}else{
    
    Object.seal(otroProducto);// este metodo impide que se agreguen o eliminen propiedades del metodo pero si permitirá editarlas.
    otroProducto.disponible=false;
    otroProducto.precio=45000;
    //delete otroProducto.precio; tampoco es posible realizarlo
    //otroProducto.imagen="lol.txt";//el error al tratar de crear una nueva propiedad, se lanza en esta linea.
    console.log(otroProducto)
}




