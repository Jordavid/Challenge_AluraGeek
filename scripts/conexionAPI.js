
async function listaCardGeek (){
    const conexion = await fetch('http://localhost:3001/cards');
    const conexionJson = await conexion.json();
    
    return conexionJson;
}

async function crearCardGeek(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/cards', {
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

export const exportaApi = {
    listaCardGeek, crearCardGeek
}