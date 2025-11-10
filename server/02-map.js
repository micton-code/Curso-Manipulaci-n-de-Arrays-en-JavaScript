const letras = ['a','b','c'];

// CON FOR:
const newArray = [];

for (let index = 0; index < letras.length; index++) {
    const elemento = letras[index];
    newArray.push(elemento + '++');
}


// CON MAP:
const newArrayConMap = letras.map( elemento => elemento + "+++"); 

console.log('original:', letras);
console.log('new array con for:', newArray);
console.log('new array con map:', newArrayConMap);