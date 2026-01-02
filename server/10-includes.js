const mascotas = ['perro', 'gato', 'loro'];

let includeInArray = false;

//usando for:
for (let index = 0; index < mascotas.length; index++) {
    const elemento = mascotas[index]; //accedo al elemento usando su índice en el array.
    if (elemento === 'perro') {
        includeInArray = true;
        break;
    }
}
console.log('¿El array incluye perro? (usando for):', includeInArray);

//usando includes:
const incluyeGato = mascotas.includes('gato');
console.log('¿El array incluye gato? (usando includes):', incluyeGato);