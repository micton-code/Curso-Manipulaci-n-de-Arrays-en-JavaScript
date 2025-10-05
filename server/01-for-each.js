const letras = ['a', 'b', 'c'];

for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log('for', element);
}

letras.forEach((item) => console.log('forEach', item));