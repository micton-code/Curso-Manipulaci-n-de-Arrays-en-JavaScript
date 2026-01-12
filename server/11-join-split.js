const elementos = ['Agua', 'Fuego', 'Aire'];


let rtaFinal = '';
const separador = '--';
//usando for :
for (let index = 0; index < elementos.length; index++) {
    const elemento = elementos[index];
    rtaFinal = rtaFinal + elemento + separador;
}
console.log('Usando for', rtaFinal);

//usando join :
const rtaJoin = elementos.join('**');
console.log('Usando join', rtaJoin);

//usando split :
const title = 'Curso de Manipulación de Arrays';
const rtaSplit = title.split(' ');
    //split devuelve un array de strings que estaban separados por el espacio
console.log('Usando split', rtaSplit);

//ejemplo más complejo de split (url):
const urlFinal = title.split(' ').join('/').toLowerCase();  
    //NOTA: En urlFinal primero eliminamos los espacios con split, luego unimos con / usando join y finalmente pasamos a minúsculas con toLowerCase
    //join une los elementos del array en un string, usando el separador que le pasemos como argumento
console.log('Usando split + join + toLowerCase =', urlFinal);