// PASO 1: Encontrar el elemento de error
// - Usar querySelector para encontrar el span de error
// - Usar la convención: `.${inputElement.id}-error`
//
// PASO 2: Aplicar estilos de error al input
// - Agregar clase "form__input_type_error" al inputElement
//
// PASO 3: Mostrar mensaje de error
// - Asignar errorMessage al textContent del span
// - Agregar clase "form__input-error_active" al span de error
const formElement = document.querySelector(".form");

const showInputError = (inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  if (formError) {
    inputElement.classList.add("form__input_type_error");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error_active");
  } else {
    console.error(
      `No se encontró el elemento de error para: ${inputElement.id}`,
    );
  }
};
