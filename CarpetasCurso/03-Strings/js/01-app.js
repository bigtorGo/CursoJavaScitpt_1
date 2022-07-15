//declaracion de stringss
let producto ='Televisor samsung';
let producto2=String('Radio');
let producto3= new String('Monitor de 22"');
const producto4= "Monitor de 24 \"";// escapando caracteres para incluir las comillas dobles ssobre un string creado con las mismas comillas dobles.

//metodos de strings. Includess y length

let largoString=producto4.length;// length permite saber la cantidad de letras que tiene una cadena de texto.
console.log(largoString);
let posicionPalabra= producto.indexOf('samsung');//indica en que posición o indice del arreglo comienza la palabra buscada. 
console.log(posicionPalabra);
let incluye= producto2.includes('samsung');//indica si la cadena de texto incluye o no la palabra ingresada como parametro. Es camel case, por lo que si ponesmo Samsung, nos informará que no encontró el valor.

// metodos de concatenación

var nombre= 'Victor';
var apellido= ' Gómez';
console.log(nombre.concat(apellido));
console.log(`Hola ${nombre}. Estas haciendo un gran curso para tu futuro`);
let valor=1700;
console.log(`Hoy fui a comprar pan y el kilo me salio a $ ${valor}.`)

//modificando el texto
var reemplazado=producto3.replace('"',' Pulgadas');
console.log(reemplazado);
var corte=reemplazado.slice(0,7);
console.log(corte);
var corte2=reemplazado.substring(0,7);
console.log(corte2);
corte=reemplazado.slice(7,0);//slice no devuelve nada si el inicio es mayor al final
console.log(corte);
corte2=reemplazado.substring(7,0);//substring inverte los valores para dejar al numero mayor en fin. El resultado sera el mismo que reemplazado.substring(0,7);
console.log(corte2);
console.log(producto3);

//transformar un numero a valor
const hobbies='Leer, caminar, jugar, escribir, escuchar música';
console.log(hobbies.split(','));
var valorATexto= valor.toString();
console.log(`el valor ${valorATexto} se ha transformado a texto`);

