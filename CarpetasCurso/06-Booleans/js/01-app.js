//Comparar booleans

const boolean1=true;
const boolean2=false;
const boolean3="false"
console.log(boolean1==boolean2);
console.log(boolean1!=boolean2);
console.log(boolean1==boolean3); // a diferencia de la comparación no estricta de los numeros y strings. Los booleans si retornaran false al compararlo con un tipo texto.
console.log(typeof( boolean4= new Boolean(true)));// al crear un booleando de esta forma se creara su representación en un tipo objeto.

//buenas practicas para evaluar un booblean

if(boolean1){//siempre hay que evitar usar los signos de comparación dado que de esta forma queda implisita la comparación verdadero/falso.
    console.log("el boolean es verdadero");

}else{
    console.log("el boolean no es verdadero");
}

if(!boolean1){
    console.log("el boolean no es verdadero");

}else{
    console.log("el boolean es verdadero");
}
//operador ternario

boolean1 ? console.log("es vedadero"):console.log("es falso");