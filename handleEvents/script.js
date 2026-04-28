const player = document.getElementById("jugador");

document.addEventListener("keydown", function (event) {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    player.style.background = "red";
  }
});

document.addEventListener("keyup", function (event) {
  // Escribe tú código aquí
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    player.style.background = "green";
  }
});
