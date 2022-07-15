variableSimple= "esto es una declaración simple";
var variable="esta es una declaración que le indica al interprete que la variable...";
console.log(variableSimple+'\n'+ variable );
//declaracion de multiples variables
var marca="Sony", consola="PS5", precio="600 USD";
var nombreProducto='el nombre de la variables sigue el estilo "camel case"';
var nombre_producto='el nombre de la variables sigue el estilo "snake"';
var NombreProducto='el nombre de la variables sigue el estilo "pascal"'

/*una variable declarada con let no permitira volver a declarar otra con el mismo nombre en el mismo scope. Esta es la diferencia con la declaración var. let Ofrece mayores
niveles de seguridad, evitandonos problemas con variables al momento de declararlas*/
var nombrePadre= 'Gilberto';
var nombrePadre='Juan';
nombrePadre='Andres';
//let nombreMadre= 'Isabel';
//nombreMadre='Fernanda';
//let nombreMadre= 'Andrea';

// Las constantes tienen dos carácteristicas principales, no se pueden reasignar y deben ser declaradas con un valor
const nombreHermano='Gustavo';
nombreHermano='Alonso';