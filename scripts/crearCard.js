import { exportaApi } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function creadCard(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await exportaApi.crearCardGeek(nombre, precio, imagen);
}

formulario.addEventListener('submit', evento => creadCard(evento));