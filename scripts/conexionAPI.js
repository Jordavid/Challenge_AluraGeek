
async function listaCardGeek (){
    const conexion = await fetch('http://localhost:3001/products');
    const conexionJson = await conexion.json();
    
    return conexionJson;
}

async function crearCardGeek(name, price, image) {
    const conexion = await fetch('http://localhost:3001/products', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: name,
            price: parseFloat(price), // Asegura que el precio sea un número
            image: image
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