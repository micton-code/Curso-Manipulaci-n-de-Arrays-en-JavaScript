const usuarios = [
    {userId:1, userName:'Juan', atributos: ['peloLargo', 'ojosVerdes'] },
    {userId:2, userName:'Ana', atributos: ['peloCorto', 'ojosMarrones'] },
    {userId:3, userName:'Luis', atributos: ['peloRizado', 'ojosAzules'] },
]; 

//USANDO MAP Y FLATMAP POR SEPARADO
const respuesta = usuarios.map( usuarios => usuarios.atributos);

console.log(respuesta);
    //map crea un nuevo array a partir de otro array, en este caso estamos creando un nuevo array con los atributos de cada usuario.



const respuesta2 = usuarios.map( usuarios => usuarios.atributos).flat();

console.log('map y flat por separado:', respuesta2);
    //flat "aplana" el array, es decir, elimina los arrays internos y crea un solo array con todos los elementos.


//USANDO FLATMAP
const respuesta3 = usuarios.flatMap( usuarios => usuarios.atributos);

console.log('usando flatmap:', respuesta3);
    //flatMap es una combinación de map y flat, es decir, primero mapea el array y luego lo aplana en un solo paso. 


//RETO : tenemos varios calendarios...(solo queremos un array linial de las fechas de inicio de esos calendarios)
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const ejemplo = Object.keys(calendars);
console.log(ejemplo); 
    //nos devuelve un array con las claves del objeto calendars (atributos primaryCalendar y secondaryCalendar)


const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log(rta3);

    //para convertir un objeto en un array usamos Object.values() que nos devuelve un array con los valores del objeto. 
    // Luego usamos flatMap para mapear cada array de citas y devolver un array con las fechas de inicio.

    //la diferencia general entre map y flatMap es que flatMap aplana el array resultante en un solo paso, mientras que con map tendríamos que usar flat() por separado.