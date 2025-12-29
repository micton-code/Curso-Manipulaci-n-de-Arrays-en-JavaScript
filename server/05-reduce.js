const numeros = [1, 2, 3, 4];

let sum = 0;
// Usando for
for (let index = 0; index < numeros.length; index++) {
    const elemento = numeros[index];
    sum += elemento; // sum = sum + elemento
}
console.log('Suma con for:', sum);

// Usando reduce
const sumaReduce = numeros.reduce((sum, elemento) => sum + elemento, 0);
// el primer argumento es la función de reducción(arrowfunction), El segundo argumento (0) es el valor inicial de sum
//sum: acumulador, elemento: valor actual en cada iteración

console.log('Suma con reduce:', sumaReduce);