import { exportaApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-productosCards]");

function deleteCards(cardElement, id) {
    const deleteIcon = cardElement.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', async () => {
        try {
            await exportaApi.eliminarCardGeek(id);
            cardElement.remove();
        } catch (error) {
            console.error('Error al eliminar la tarjeta:', error);
            alert('Error al eliminar la tarjeta');
        }
    });
}

export const methodDelete = {
    deleteCards
};

