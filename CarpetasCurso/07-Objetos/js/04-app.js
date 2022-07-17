
var pelicula={
    //nombre: "Doctor Strange en el multiverso de la locura",
    nombrePelicula: "Doctor Strange en el multiverso de la locura",
    direccion:"Sam Raimi"
    
    }
var productor={
    nombreProductor:"Michael Waldron",/* si unimos dos objetos que tengan las mismas propiedades/claves, se sobre escribiran los valores.
    En este caso el nombre del productor sobreescribiría el de la pelicula si ambos llevan una propiedad llamada nombre.
    */
    añoNaciomiento: 1987
}
var guionista={
    nombreGuionista:"Stan Lee",
    añoNaciomiento: 1922
 }
 console.log(pelicula);
 console.log(productor);
    
const infoPeli= Object.assign(pelicula,productor);
console.log(infoPeli);
const info2Peli= {...pelicula,...productor,...guionista};//esta es la forma
console.log(info2Peli);

//palabra this y declarar funciones
var direccion= "Vicuña mackenna";
var pelicula={
    //nombre: "Doctor Strange en el multiverso de la locura",
    nombrePelicula: "Doctor Strange en el multiverso de la locura",
    direccion:"Sam Raimi",
	mostrarDireccion: function()
		{
			//se usa this para referise al objeto instanciado.
			console.log(`Esta película fue dirígida por: ${this.direccion}`);
		}
    
}
pelicula.mostrarDireccion();