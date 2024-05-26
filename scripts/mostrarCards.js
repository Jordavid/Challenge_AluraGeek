import { exportaApi } from "./conexionAPI.js";
import { methodDelete } from "./eliminarCard.js";

const lista = document.querySelector("[data-productosCards]");
const limpiar = document.querySelector(".formulario__boton__limpiar");

function mostrarCards(id, name, price, image) {
    const cardGeek = document.createElement("li");
    cardGeek.classList.add("card__item");

    cardGeek.innerHTML = `
    <div class="productos_cards">
        <div class="card">
            <div class="card_full">
                <img src="${image}" alt="Imagen de la tarjeta" class="image_geek"/>
                <div class="card-container--info">
                    <span class="nombre_card">${name}</span>
                    <div class="card_container_value">
                        <span class="precio_card">$ ${price}</span>
                        <img src="./assets/trash.png" alt="Icono de basura" class="delete-icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    methodDelete.deleteCards(cardGeek,id);

    return cardGeek;
}

async function listarCards() {
    try {
        const listaCard = await exportaApi.listaCardGeek();
        console.log(listaCard);
        listaCard.forEach(element => lista.appendChild(mostrarCards(element.id, element.name, element.price, element.image)));
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }
}

limpiar.addEventListener('submit', limpiarCampos);

function limpiarCampos(evento){
    evento.preventDefault();
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('imagen').value = '';
}

listarCards();