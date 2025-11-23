// ejemplo 1
const frutas = [ "manzana", "uva", "cereza", "pera"];

//1.1 filtro usando for
const newArray = [];
for (let index = 0; index < frutas.length; index++) {
    const item = frutas[index];
    if (item.length >= 6) {
        newArray.push(item); 
    }
}
console.log('Array original: ', frutas);
console.log  ('usando for: ', newArray);


//1.2 filtro usando filter
const respuesta = frutas.filter(item => item.length <= 4);
console.log('usando filter: ', respuesta);


//ejemplo 2:
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
    {
        nombreCliente: "Nicolacito",
        total: 500,
        delivered: false,
    },
];

const entregasDeOrdenes = orders.filter(item => item.delivered && item.total >= 100);
console.log('Ordenes entregadas: ', entregasDeOrdenes);

const buscarPorNombre = (consulta) => {
    return orders.filter(item => {
        return item.nombreCliente.includes(consulta);
    });
}

console.log('busqueda por nombre "Nico": ', buscarPorNombre('Nico'));