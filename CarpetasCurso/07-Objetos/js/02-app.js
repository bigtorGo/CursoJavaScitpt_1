//agregar un objeto al objeto2 que ya ha sido creado
producto2.medidas={
	peso:"3kg",
	alto: "10cm",
	ancho:"30cm",
	largo:"50cm"
}
//destructuring  de objetos anidados.
var {alto,ancho,largo}=producto2.medidas;
console.log(alto);
console.log(ancho);
console.log(largo);

var producto3={
	nombre: "Cocina Somela",
	precio:400000,
	disponible: true,
	unidades:15,
	ubicacion:{
		pasillo:02,
		estanteria:'C'
	
	},
    informacion:{
        descripcion: "lavadora con multiples funciones y un secado rápido",
        fabricacion:{
            pais:"chile"
        }
    }

}

var {nombre, informacion, informacion:{fabricacion:{pais}}}=producto3;
console.log(`El articulo ${nombre}, fue fabricado en ${pais}`);