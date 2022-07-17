//Creando arreglos

const paises = new Array('Chile','Argentina', 'Brasil');

console.log(paises);

const muchasCosas= new Array('strings', 200, 20.5,null,[2,3,4],{nombre: "victor", trabajo: "programador"});
console.log(muchasCosas);
console.table(muchasCosas);

//obtener valores arreglo
console.table(paises[0]);
console.table(paises[3]);//si el indice esta fuera del rango del arreglo, retorna undefined.
paises[3]="Mexico";
console.log("Retornando el valor de un arreglo dentro de un arreglo",muchasCosas[4][1]);

//modificar valores

paises.push("Peru", "Bolivia");//agrega un elemento al final del arreglo

paises.unshift('Uruguay');//para agregar elemenmtos al inicio del arreglo se puede usar el metodo unshift
console.log(paises);
var primerElemento=paises.pop();//obtiene el primer elemento del arreglo y lo elimina de este
console.log(paises);
console.log(paises.length);
//recorrer un arreglo
for(let i=0;i<paises.length;i++)
{
    console.log(paises[i]);
    
}
//modificar los valores de un arreglo
for(let i=0;i<paises.length;i++)
{
    console.log(`El indice de este pais llamado: ${paises[i]} es: ${i}`);
    
}
