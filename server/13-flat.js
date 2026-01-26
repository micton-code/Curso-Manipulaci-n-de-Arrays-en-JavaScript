const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//usando for:
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('Usando for:',newArray);

    //ESTO es comun en entrevistas de trabajo, el reto es hacer otro con mas arrays denntro de arrays.

//usando flat:
const otraMatriz = [
    [1, 2, 3],
    [4, 5, 6,[10,11,[12,13]]],
    [7, 8, 9],
];
const flatArray = otraMatriz.flat(3);
console.log('Usando flat:', flatArray);