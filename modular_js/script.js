// // Escribe tu código aquí
// Crea una IIFE que defina una variable privada llamada secretMessage con cualquier texto que quieras. Dentro de la IIFE, muestra el valor de secretMessage en la consola.

// La variable no debe estar disponible en el scope global.

(function () {
  var secretMessage = "Este es un mensaje secreto";
  console.log(secretMessage); // "Este es un mensaje secreto"
})();

// Intentar acceder desde fuera dará undefined
console.log(typeof secretMessage); // "undefined"

// Escribe tu código aquí
var appConfig = (function () {
  var appName = "SuperHeroApp";
  var version = "1.0";

  return {
    appName: appName,
    version: version,
  };
})();

console.log(appConfig.appName);
console.log(appConfig.version);

// Las variables internas de la IIFE no están disponibles globalmente
console.log(typeof appName); // "undefined"
console.log(typeof version); // "undefined"
