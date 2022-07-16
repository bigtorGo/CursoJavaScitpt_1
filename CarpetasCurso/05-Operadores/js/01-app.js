
//Operadores para igualdades

var numero1=30;
var numero2=50;
var numero3="50";
console.log(numero2==numero3);//compara si ambos numeros son iguales. No tiene en cuenta el tipo, es decir dara true porque 20 es igual a "20" si "20" puede ser númerico.
console.log(numero2===numero3);// Este comparador se denomina estricto. Tiene en cuenta el tipo por lo que la respuesta es false.

//operadores de desigualdades

console.log(numero2!=numero3);//compara si ambos numeros son distintos. No tiene en cuenta el tipo, es decir dara false porque 20 es igual a "20", si "20" puede ser númerico.
console.log(numero2!==numero3);// Este comparador se denomina estricto. Tiene en cuenta el tipo por lo que la respuesta es true.
console.log("Victor" != "victor");//es posible comparar la desigualdad de texto de la misma forma.

//comparar Null y undefined

var numero1;
console.log(numero1)//retornará undefined;
var numero2=null;
console.log(numero2)//retornará null;
console.log(numero2==numero1)//retornará true;
console.log(numero2===false)//retornará true;