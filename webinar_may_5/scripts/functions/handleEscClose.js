// PASO 1: Importar la funcion closePopup
import { closePopup } from "../popup.js";
export function handleEscClose(event) {
  // PASO 2: Detectar si la tecla presionada es "Escape"
  // - Comprobar si event.key === "Escape"
  if (event.key !== "Escape") {
    return;
  }
  //
  // PASO 3: Buscar si existe algún popup actualmente abierto
  // - Usar document.querySelector(".popup_opened") para obtenerlo
  const popup = document.querySelector(".popup_opened");
  // PASO 4: Cerrar el popup abierto (si existe)
  // - Llamar a closePopup(openedPopup)
  if (popup) {
    closePopup(popup);
  } else {
    return;
  }
}
