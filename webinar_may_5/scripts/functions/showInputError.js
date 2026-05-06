export function showInputError(inputElement, errorMessage) {
  // PASO 1: Obtener el formulario al que pertenece el input
  // - Usar document.forms y el nombre del formulario (inputElement.form.name)

  const formElement = inputElement.form;

  //
  // PASO 2: Seleccionar el elemento de error correspondiente al input
  // - Buscar con un selector dinámico basado en inputElement.name + "-error"
  const inputName = inputElement.name;
  const errorElement = formElement.querySelector(`.${inputName}-error`);
  //
  // PASO 3: Marcar el campo con estilo de error
  // - Agregar la clase "popup__input_type_error" al input
  inputElement.classList.add("popup__input_type_error");
  //
  // PASO 4: Mostrar el mensaje de error
  // - Asignar errorMessage al contenido de errorElement.textContent
  errorElement.textContent = errorMessage;
  //
  // PASO 5: Hacer visible el mensaje de error
  // - Agregar la clase "popup__error_visible" al errorElement
  errorElement.classList.add("popup__error_visible");
}
