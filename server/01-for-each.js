// recorrido de un Array (arreglo) usando "for"
const letras = ['a', 'b', 'c'];

for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log('for', element);
}


// Mismo recorrido usando forEach
letras.forEach((item) => console.log('forEach', item));