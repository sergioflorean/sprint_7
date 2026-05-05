// Escribe tu código aquí

// Accede a los elementos del formulario superHeroe y extrae los valores de:

// nombre (el nombre del superhéroe),
// nivel (su nivel de poder).
const form = document.forms["superHeroe"];

// Usando nuestro ya conocido formulario de Registro de superhéroes, agrega un script en JavaScript que:

// Escuche el evento submit del formulario.
// Use preventDefault() para evitar que la página se recargue.
// Muestre en la consola el mensaje: "Superhéroe registrado: [nombre]"
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const elements = form.elements;

  const name = elements.nombre.value;
  const level = elements.nivel.value;
  //Usa tu super conocimiento en JavaScript para acceder al universo con el que se identifica el usuario radio y la opción seleccionada del select de fortaleza.
  const universe = elements.universo.value;
  const strength = elements.fortaleza.value;

  console.log(`Superhéroe registrado: ${name}`);
  console.log(`Nivel de poder: ${level}`);
  console.log(`Universo: ${universe}`);
  console.log(`Fortaleza: ${strength}`);
});

//EVENTOS CHANGE E INPUT

//
//Utilizando la variable nombreInput, escucha el evento input en el campo nombre del superhéroe de nuestro formulario, para mostrar en la consola el texto que el usuario va escribiendo en tiempo real.
const nombreInput = form.elements.nombre;

nombreInput.addEventListener("input", function (event) {
  console.log(`Nombre del superhéroe: ${nombreInput.value}`);
});

//Usando el formulario de registro de superhéroes,
// detecta el evento change en el campo Lista de superpoderes,
//  utilizando la variable superpoderesTextarea y muestra en la consola el texto cuando el usuario haya terminado de escribir
// y pierda el foco del campo.

const superpoderesTextarea = form.elements.superpoderes;

superpoderesTextarea.addEventListener("change", function (event) {
  console.log(`Superpoderes: ${superpoderesTextarea.value}`);
});

//Usando el formulario de superhéroes, tu tarea será
// enviar automáticamente el formulario cuando el textarea superpoderes alcance 10 caracteres.

superpoderesTextarea.addEventListener("input", function (event) {
  if (superpoderesTextarea.value.length === 10) {
    form.submit();
  }
});

//Utiliza el botón para limpiar el formulario,
// detecta cuando se ejecuta el evento click en el botón,
//  para limpiar el formulario y muestra en consola
// el mensaje: "El formulario ha sido reseteado con exito.".
const resetButton = form.elements.limpiar;

resetButton.addEventListener("click", function (event) {
  form.reset();
  console.log("El formulario ha sido reseteado con exito.");
});
