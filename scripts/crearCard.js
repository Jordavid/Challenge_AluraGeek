import { exportaApi } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function creadCard(evento) {
    evento.preventDefault();

    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const image = document.querySelector("[data-imagen]").value;

    await exportaApi.crearCardGeek(name, price, image);
}

formulario.addEventListener('submit', evento => creadCard(evento));