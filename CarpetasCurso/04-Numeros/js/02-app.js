// formas de convertir strings a numerico

var numero1="22";

var numero2="21.5";

var numero3="-25";

var numero4="Uno";

var numero5=55;

console.log(typeof(numero1));

console.log(Number.parseInt(numero1));// transforma un valor valido de string a entero.
console.log(Number.parseFloat(numero2));// transforma un valor valido de string a decimal.
console.log(Number.parseInt(numero4));// retorna NAN(NOT A NUMBER)
console.log(Number.isNaN(numero4)); //retorna true si es NAN.
console.log(Number.isInteger(numero1));//retorna true si es entero.

