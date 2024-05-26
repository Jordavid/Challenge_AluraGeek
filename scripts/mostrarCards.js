import { exportaApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-productosCards]");

function mostrarCards(nombre, precio, imagen) {
    const cardGeek = document.createElement("li");
    cardGeek.classList.add("card__item");

    cardGeek.innerHTML = `
    <img src="${imagen}" alt="Imagen de la tarjeta" />
    <div class="card-container--info">
        <span class="nombre_card">${nombre}</span>
        <div class="card-container--value">
            <span class="precio_card">$ ${precio}</span>
            <img src="./assets/trash.png" alt="Icono de basura" />
        </div>
    </div>`;

    return cardGeek;
}

async function listarCards() {
    try {
        const listaCard = await exportaApi.listaCardGeek();
        console.log(listaCard);
        listaCard.forEach(element => lista.appendChild(mostrarCards(element.nombre, element.precio, element.imagen)));
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }
}

listarCards();




