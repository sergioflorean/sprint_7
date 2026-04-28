const box = document.getElementById("mistery-box");

// Escribe tu código aquí
box.addEventListener("mouseover", () => {
  box.textContent = "¡Descubriste el mecanismo oculto!";
});

box.addEventListener("mouseup", () => {
  box.textContent = "¡Activaste la caja misteriosa!";
});

// const timbre = document.getElementById("timbre");

// function handleClient() {
//   console.log("El recepcionista atiende al cliente.");
// }

// timbre.addEventListener("click", handleClient);

// // Tu código aquí:
// timbre.removeEventListener("click", handleClient);

// const alarma = document.getElementById("alarma");

// function sonarAlarma() {
//   console.log("¡Alarma activada!");
//   // Escribe tu código para detener futuros clics aquí
// }

// alarma.addEventListener("click", sonarAlarma);

// alarma.addEventListener("click", () => {
//   alarma.removeEventListener("click", sonarAlarma);
// });
