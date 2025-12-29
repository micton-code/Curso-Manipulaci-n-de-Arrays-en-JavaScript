const items = [1, 3, 2, 3];

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1; //Si no existe la propiedad, la inicializo en 1
    } else {
        obj[item] = obj[item] + 1; 
    }
    return obj;
}, {});

console.log(respuesta);


//Ejemplo 2
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const respuesta2 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});

console.log(respuesta2);

//RETO: hay que hacer el reto de la clase (agrupar por rangos ej: 1-5=5, 6-8=11, 9-10=3, es decir acumular por rangos y no de uno en uno)