export function hideInputError(inputElement) {
  // PASO 1: Obtener el formulario al que pertenece el input
  // - Usar document.forms y el nombre del formulario (inputElement.form.name)
  const formElement = inputElement.form;
  //
  // PASO 2: Seleccionar el elemento de error correspondiente al input
  // - Buscar con un selector dinámico basado en inputElement.name + "-error"
  const inputName = inputElement.name;
  const errorElement = formElement.querySelector(`.${inputName}-error`);
  //
  // PASO 3: Quitar el estilo de error del campo
  // - Remover la clase "popup__input_type_error" del input
  inputElement.classList.remove("popup__input_type_error");
  //
  // PASO 4: Ocultar el mensaje de error
  // - Remover la clase "popup__error_visible" del errorElement
  errorElement.textContent = "";
  //
  // PASO 5: Limpiar el texto del mensaje de error
  // - Asignar una cadena vacía a errorElement.textContent
  errorElement.classList.remove("popup__error_visible");
}
