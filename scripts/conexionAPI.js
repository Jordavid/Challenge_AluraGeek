
async function listaCardGeek (){
    const conexion = await fetch('http://localhost:3001/products');
    const conexionJson = await conexion.json();
    
    return conexionJson;
}

async function crearCardGeek(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/products', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: parseFloat(precio), // Asegura que el precio sea un número
            imagen: imagen
        })
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function eliminarCardGeek(id){
    try {
        const conexion = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
        });

    if(!conexion.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
    } catch (error) {
        console.error('Error deleting card data:', error);
        throw error;

    }
    
}

export const exportaApi = {
    listaCardGeek, crearCardGeek, eliminarCardGeek
}