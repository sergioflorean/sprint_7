// PASO 1: Encontrar el elemento de error
// - Usar querySelector con `.${inputElement.id}-error`
//
// PASO 2: Remover estilos de error
// - Remover clase "form__input_type_error" del inputElement
// - Remover clase "form__input-error_active" del span de error

// PASO 3: Limpiar mensaje
// - Establecer textContent del span como cadena vacía

const hideInputError = (inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  if (formError) {
    inputElement.classList.remove("form__input_type_error");
    formError.classList.remove("form__input-error_active");
    formError.textContent = "";
  }
};
