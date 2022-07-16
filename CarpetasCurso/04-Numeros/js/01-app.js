//no es necessario declarar los tipos numericos. Todos se crean de la misma forma
var numeroNegativo= -10;
var numeroDecimal= .345;
var numeroEntero= 1000;
const siete= new Number(7);
console.log(siete);

//operaciones

var resultado

numero1=10;
numero2=30;

resultado= numero1+numero2;
console.log(`La suma de ${numero1} y ${numero2} es = ${resultado}`);
resultado= numero1-numero2;
console.log(`La resta de ${numero1} y ${numero2} es = ${resultado}`);
resultado= numero1*numero2;
console.log(`La multiplicación de ${numero1} y ${numero2} es = ${resultado}`);
resultado= numero1/numero2;
console.log(`La divición de ${numero1} y ${numero2} es = ${resultado}`);
resultado= numero1%numero2;
console.log(`El resto de ${numero1} y ${numero2} es = ${resultado}`);

//Algunas unciones math

console.log(Math.PI);
console.log(Math.ceil(.95));
console.log(Math.ceil(4));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));// siempre redondeara hacia arriba. ceil=techo

console.log(Math.floor(7.004));// siempre redondeara hacia abajo. floor=piso
console.log(Math.floor(-7.004));

console.log(Math.abs(-245));
console.log(Math.pow(2,8));
console.log(Math.min([4,2,5,1,5]));
console.log(Math.max([4,2,5,1,5]));

//orden de las operaciones
resultado= 25+4*11;
resultado=15-5/2;
resultado=20-5/2;
resultado=(23+22+5-3) * .2;//los parentesis, como es de espera, indican la prioridad.

//operadores para incremento
resultado++;
--resultado;
resultado+=5;