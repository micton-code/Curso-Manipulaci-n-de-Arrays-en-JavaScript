const elementos = [1,1,2,2];
const otrosElementos = [4,4,5,5];
const masElementos = [6,6,7,7];

const newArray = [...elementos]; 
    //el spread operator copia los elementos de un array a otro sin necesidad de un bucle

//usando for:
for(let index = 0; index < otrosElementos.length; index++){
    const elemento = otrosElementos[index];
    newArray.push(elemento);
}
console.log('usando for', newArray);

//usando concat:
const newArray2 = elementos.concat(otrosElementos);
    //en este caso no se usa el spread operator, sino el metodo concat que une dos arrays en uno nuevo(concat es inmutable y no modifica los arrays originales)
console.log('usando concat', newArray2);


//Ejemplo usando spread operator:
const otroArray = [...elementos, ...otrosElementos]; 
    //usando spread operator para unir dos arrays en uno nuevo
console.log('usando spread operator', otroArray);

    //Otro ejemplo con spread operator:
    const nuevoElemento = [...elementos, 'Palabras random'];
    console.log('usando spread operator con nuevo elemento', nuevoElemento);
    
    //Otro ejemplo con spread operator:
    const nuevoElemento2 = [...elementos, ...'Palabras'];
    console.log('usando spread operator con nuevo elemento nro2', nuevoElemento2);


//Ejemplo usando push (mutable):
elementos.push(otrosElementos);
console.log('usando push', elementos);
    //push modifica el array original, agregando el nuevo array como un solo elemento al final del mismo.

//Otro ejemplo usando push:
otrosElementos.push(...masElementos);
console.log('usando push y spread operator', otrosElementos);
    //en este caso usamos push junto con spread operator para agregar los elementos de "masElementos" de forma individual al final del array "otrosElementos"


/////Resumen:
    //'concat' y 'spread operator' son inmutables, no modifican los arrays originales y crean uno nuevo.
    //'push' es mutable, modifica el array original agregando nuevos elementos.
