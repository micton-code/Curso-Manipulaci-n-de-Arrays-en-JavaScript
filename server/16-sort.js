const meses = ["March", "Jan", "Feb", "Dec"];
meses.sort();
console.log(meses); // [ 'Dec', 'Feb', 'Jan', 'March' ]


const numeros = [1, 30, 4, 21, 100000];
numeros.sort((a, b) => a - b);
console.log(numeros); // [ 1, 4, 21, 30, 100000 ]



const palabras = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
palabras.sort((a, b) => a.localeCompare(b));
console.log(palabras);
// [ 'adieu', 'banana', 'café', 'communiqué', 'éclair', 'premier', 'réservé' ]



const ordenes = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
ordenes.sort((a, b) => a.total - b.total);
console.log(ordenes);
