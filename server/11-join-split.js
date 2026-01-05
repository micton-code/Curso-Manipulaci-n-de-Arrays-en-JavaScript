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
console.log('Usando split', rtaSplit);

//ejemplo más complejo de split (url):
const urlFinal = title.split(' ').join('/').toLowerCase();
console.log('Usando split + join + toLowerCase =', urlFinal);