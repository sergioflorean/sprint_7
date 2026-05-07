// Importa las funciones y pruébalas
import { sum, subtract, product, divide } from "./utils.js";
const a = 12;
const b = 4;

console.log(sum(a, b));
console.log(subtract(a, b));
console.log(product(a, b));
console.log(divide(a, b));

// Importa el logger y pruebalo
import logger from "./logger.js";
logger.info();
logger.warn();
logger.error();
