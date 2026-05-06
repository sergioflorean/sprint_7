// PASO 1: Importar la funcion toggleButtonState
// PASO 2: Importar la funcion showInputError
// PASO 3: Importar la funcion hideInputError
import { toggleButtonState } from "./toggleButtonState.js";
import { showInputError } from "./showInputError.js";
import { hideInputError } from "./hideInputError.js";

export const setEventListeners = (formElement) => {
  // PASO 4: Obtener todos los inputs del formulario
  // - Usar Array.from(formElement.querySelectorAll(".popup__input"))
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  //
  // PASO 5: Obtener botón de envío
  // - Usar formElement.querySelector(".popup__button")
  const submitButton = formElement.querySelector(".popup__button");
  //
  // PASO 6: Configurar evento para cada input
  // - Usar forEach() en inputList
  // - Agregar event listener 'input' a cada campo
  // - En el callback:
  //   - Validar input con input.validity.valid
  //   - Mostrar error si no es válido usando showInputError(input, input.validationMessage)
  //   - Ocultar error si es válido usando hideInputError(input)
  //   - Llamar toggleButtonState(inputList, buttonElement) para habilitar/deshabilitar el botón
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      !inputElement.validity.valid
        ? showInputError(inputElement, inputElement.validationMessage)
        : hideInputError(inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};
