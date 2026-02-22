const productos = [
    { titulo: 'Pizza', precio: 10, id:'1' },
    { titulo: 'Hamburguesa', precio: 8, id:'2' },
    { titulo: 'Ensalada', precio: 6, id:'3' }
];

const misProductos = [];

console.log('Productos de la tienda:', productos);
console.log('Mis Productos comprados:', misProductos);
console.log('-'.repeat(10)); 


// Agregar un producto a misProductos
const productoComprado = productos.findIndex(item => item.id === '2'); 
    // .findIndex() busca el índice del primer elemento que cumple la condición dada, en este caso, el producto con id '2' (Hamburguesa).

    if (productoComprado !== -1) {
        misProductos.push(productos[productoComprado]); 
            // .push() agrega el producto encontrado a la lista de misProductos.
            // productos[productoComprado] accede al producto específico en la lista de productos utilizando el índice encontrado.
        
        productos.splice(productoComprado, 1); 
            // .splice() elimina el producto de la lista de productos, evitando que esté disponible para futuras compras.   
    } 

console.log('Productos de la tienda:', productos);
console.log('Mis Productos comprados:', misProductos);
console.log('-'.repeat(10)); 



//Ejercicio nro2
const productosV2 = [
    { titulo: 'Pizza', precio: 10, id:'1' },
    { titulo: 'Hamburguesa', precio: 8, id:'2' },
    { titulo: 'Ensalada', precio: 6, id:'3' }
];

const actualizarProducto = {
    id: '3', 
    cambios: {
        precio: 20,
        descripcion: 'Ensalada con ingredientes frescos y saludables'
    }
}
const productoIndexV2 = productosV2.findIndex(item => item.id === actualizarProducto.id);

    //.findIndex() busca el índice del producto que coincide con el id proporcionado en actualizarProducto.

productosV2[productoIndexV2] = {
    ...productosV2[productoIndexV2], 
    ...actualizarProducto.cambios
};
    // Aquí se actualiza el producto en productosV2 utilizando el índice encontrado. Se crea un nuevo objeto que combina las propiedades existentes del producto con las nuevas propiedades proporcionadas en actualizarProducto.cambios. Esto se logra utilizando el operador de propagación (...), que permite fusionar los objetos de manera eficiente.
    //...productosV2[productoIndexV2] mantiene las propiedades originales del producto, mientras que ...actualizarProducto.cambios sobrescribe o agrega las propiedades nuevas, como el nuevo precio y la descripción.

console.log('Productos actualizados:', productosV2); 