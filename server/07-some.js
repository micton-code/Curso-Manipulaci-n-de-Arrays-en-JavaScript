const numeros = [1, 2, 3, 4];

let respuesta = false;
//usando for:
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (element % 2 === 0) {
        respuesta = true;
        break;
    }
}  
console.log(respuesta); 

//usando some:
const respuestaSome = numeros.some(item => item % 2 === 0); // si el residuo de la division es 0, es par
console.log('respuesta con Some:', respuestaSome);


//Ejemplo 2:
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

const respuesta3 = orders.some(item => item.delivered); // si algun pedido fue entregado
console.log('respuesta some orders:', respuesta3);


//Ejemplo 3: 
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const { areIntervalsOverlapping } = require('date-fns')//libreria para manejar fechas, ver docu en https://date-fns.org/v2.29.3/docs/areIntervalsOverlapping 

//'require' es para importar librerias en nodejs
// { areIntervalsOverlapping } es destructuring, para extraer solo esa funcion de la libreria date-fns, las llaves se usan para destructuring

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate }, 
            { start: newDate.startDate, end: newDate.endDate }
        )
    })
};

console.log('se sobreponen?', isOverlap(newAppointment));