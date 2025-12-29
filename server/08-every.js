const numeros = [1,30,49,29,10,13];

//usando for:
let respuesta = true;

for(let index = 0; index < numeros.length; index++){
    const element = numeros[index]; //element es el valor del arreglo en la posicion index, ejemplo el 30 es el elemento en la posicion 1
    if(element >= 40){
        respuesta = false;
        break;
    }
}
console.log('La respuesta usando for:', respuesta);

//usando every:
const respuestaEvery = numeros.every((num) => num <= 40);
console.log('La respuesta usando every:', respuestaEvery);


//Ejercicio (todos los jugadores del equipo deben ser menor a 15 años, evalualo con "every")
const players = [
    { name: "Player 1", age: 12 },
    { name: "Player 2", age: 14 },
    { name: "Player 3", age: 11 },
    { name: "Player 4", age: 13 },
];

const jugadoresMenores15 = players.every((jugador) => jugador.age <= 15);
console.log('¿Todos los jugadores son menores de 15 años? --->', jugadoresMenores15); 