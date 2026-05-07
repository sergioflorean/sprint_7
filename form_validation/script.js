// Ahora vas a mejorar la experiencia de usuario en el formulario de Superhéroes agregando validación en tiempo real y mensajes de error personalizados.

// Mientras el usuario escribe, el formulario mostrará errores en tiempo real: los campos inválidos tendrán borde rojo y un mensaje debajo.

// Cada entrada debe mostrar un mensaje de error en un <span> cuando su valor no cumpla con las reglas de validación (required, minlength, maxlength, pattern, etc.).
// Cuando un campo no sea válido, se debe resaltar con un borde rojo usando la clase form__input_type_error.
// Borde rojo de 2px de ancho.
// Cuando la entrada se vuelva válido, el borde rojo debe desaparecer y el mensaje de error debe ocultarse.
// Utiliza validationMessage para mostrar el mensaje predeterminado del navegador dentro del <span>.

const form = document.forms.superHeroe;
const inputs = form.querySelectorAll(".form__input, .form__textarea");
const submitButton = form.querySelector(".form__button--submit");

const showInputError = (inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
};

function toggleButtonState() {
  const allValid = Array.from(inputs).every((input) => input.validity.valid);
  submitButton.disabled = !allValid;
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
    toggleButtonState();
  });
});

form.addEventListener("submit", (event) => {
  let formValid = true;

  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
      formValid = false;
    }
  });

  if (!formValid) {
    event.preventDefault();
  }
});
