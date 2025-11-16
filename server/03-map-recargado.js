const orders = [
    {
        nombreCliente: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        nombreCliente: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        nombreCliente: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        nombreCliente: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log('original: ', orders)
const respuesta = orders.map(item => item.total);

console.log('respuesta: ', respuesta)

//1 AÑADIR un nuevo elemento sin modificar el array original
// 1.1 mala practica porque modifica el objeto original
const respuesta2 = orders.map(item => {
    item.impuesto = 0.20;
    return item;
});
console.log('respuesta Nro2: ', respuesta2)
console.log('original: ', orders)

// 1.2 buena practica porque no modifica el objeto original
const respuesta3 = orders.map((item) => {
    return {
        ...item,  // operador spread: copia todos los elementos del objeto item sin modificar el original
        impuesto : 0.30,

    };
});
console.log('respuesta Nro3: ', respuesta3)
console.log('original: ', orders)