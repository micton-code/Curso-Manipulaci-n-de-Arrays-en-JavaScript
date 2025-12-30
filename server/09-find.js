const numeros = [1,30,49,29,10,13];

let respuesta = undefined;

//usando for:
for (let index = 0; index < numeros.length; index++) {
    const elemento = numeros[index];
    if (elemento === 30) {
        respuesta = elemento;
        break;
    }
}
console.log("Usando for: ", respuesta);

//usando find:
respuestaFind = numeros.find(item => item ===30);
console.log("Usando find: ", respuestaFind);


//ejemplo 2:
const productos = [
    {
        nombre: "Pizza", 
        precio: 500,
        id: '01'
    },
    {
        nombre: "Hamburguesa", 
        precio: 700,
        id: '02'
    },
    {
        nombre: "Papas Fritas", 
        precio: 300,
        id: '03'
    },
    {
        nombre: "Ensalada", 
        precio: 400,
        id: '04'
    }
];
const respuestaProducto = productos.find(item => item.id === '03');
const respuestaPr = productos.findIndex(item => item.id === '03');


console.log("Producto encontrado: ", respuestaProducto);
console.log("Indice del producto encontrado: ", respuestaPr);