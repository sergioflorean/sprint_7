const shoppingCart = {
  headphones: { price: 15.99, quantity: 2 },
  "pair of shoes": { price: 62.5, quantity: 1 },
  guitar: {
    price: 400.98,
    quantity: 1,
    message: function () {
      return "Has agregado una guitarra al carrito";
    },
  },
};

// escribe tu código aquí

console.log(shoppingCart.guitar.message()); // "Has agregado una guitarra al carrito"

//// notacion abreviada

const name = "Libro";
const price = 120.0;
const quantity = 2;

const shoppingCart1 = {
  headphones: { price: 15.99, quantity: 2 },
  "pair of shoes": { price: 62.5, quantity: 1 },
  guitar: { price: 400.98, quantity: 1 },
};

// escribe tu código aquí:

// 1. Crea un objeto newItem con notación abreviada
// 2. Asigna newItem como propiedad 'book' del shoppingCart

const newItem = { name, price, quantity };
shoppingCart1.book = newItem;
console.log(shoppingCart1.book); // { name: "Libro", price: 120.00, quantity: 2 }

//  CLAVES DINAMICAS

const shoppingCart2 = {
  headphones: { quantity: 2 },
};

function addToCart(item, quantity) {
  // Escribe tu código aquí
  shoppingCart2[item] = { quantity };
}

addToCart("guitar", 1);

// El artículo debe añadirse correctamente al carrito
console.log(shoppingCart2);

// CLAVES DINAMICAS SEGUNDO EJERCICIO
const phonebook = {
  Lily: {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223",
  },
  Tim: {
    mobile: "+4235555616",
  },
};

///Actualiza la función addPhoneNumber de forma que, si el nombre proporcionado no existe en el objeto phonebook, se agregue al objeto con un objeto vacío como su valor.
function addPhoneNumber(name, numberType, number) {
  // Escribe tu código aquí
  if (!phonebook[name]) {
    phonebook[name] = {};
  }
  phonebook[name][numberType] = number;
}

// Agrega un nuevo número de teléfono para Tim.
addPhoneNumber("Tim", "home", "+4235555212");

// Revisa la consola y verifica que la función esté trabajando correctamente.
console.log(phonebook.Tim.home); // "+4235555212"
console.log(phonebook.Tim.mobile); // "+4235555616"

// COMO ELIMINAR PROPIEDADES DE UN OBJETO
const shoppingCart3 = {
  headphones: { price: 15.99, quantity: 2 },
  "pair of shoes": { price: 62.5, quantity: 1 },
  guitar: { price: 300, quantity: 1 },
};

// COMO COMPROBNAR SI UNA CLAVE EXITE EN UN OBJETO

if ("guitar" in shoppingCart3 && shoppingCart3.guitar.quantity > 0) {
  console.log("La guitarra está en el carrito y tiene una cantidad válida.");
}
// Escribe tu verificación aquí
if (shoppingCart3.hasOwnProperty("pair of shoes")) {
  console.log("El carrito contiene directamente 'pair of shoes'.");
}
// Escribe tu código aquí
delete shoppingCart3.guitar;

console.log(shoppingCart3.guitar); // undefined

// COMO ITERAR PROPIEDADES DE UN OBJETO

const tallestBuildings = {
  "Burj Khalifa": "Dubai",
  "Merdeka 118": "Kuala Lumpur",
  "Shanghai Tower": "Shangai",
  "Abraj Al-Bait Clock Tower": "Mecca",
  "Ping An International Finance Center": "Shenzen",
};

function printBuildingAndCity(obj) {
  // Escribe tu código aquí
  Object.keys(obj).forEach(function (building) {
    console.log(`${building} se encuentra en ${obj[building]}.`);
  });
}

printBuildingAndCity(tallestBuildings);

const tallestBuildings1 = {
  "Burj Khalifa": { height: 828, city: "Dubai" },
  "Merdeka 118": { height: 679, city: "Kuala Lumpur" },
  "Shanghai Tower": { height: 632, city: "Shangai" },
  "Abraj Al-Bait Clock Tower": { height: 601, city: "Mecca" },
  "Ping An International Finance Center": { height: 599, city: "Shenzen" },
};

function printBuildingAndCity1(obj) {
  // Escribe tu código aquí
  Object.keys(obj).forEach(function (building) {
    console.log(
      `${building} (${obj[building].height}m) se encuentra en ${obj[building].city}.`,
    );
  });
}

printBuildingAndCity1(tallestBuildings1);

const tallestBuildings2 = {
  "Burj Khalifa": { city: "Dubai", height: 828 },
  "Merdeka 118": { city: "Kuala Lumpur", height: 678.9 },
  "Shanghai Tower": { city: "Shanghai", height: 632 },
  "Abraj Al-Bait Clock Tower": { city: "Mecca", height: 601 },
  "Ping An Finance Center": { city: "Shenzhen", height: 599.1 },
};

function printBuildingInfo() {
  const entries = Object.entries(tallestBuildings);

  for (let i = 0; i < entries.length; i++) {
    const building = entries[i][0];
    const info = entries[i][1];
    console.log(
      `${building} está en ${info.city} y mide ${info.height} metros de altura.`,
    );
  }
}

printBuildingInfo();

// COMO COMPARAR OBJETOS
const userA = { username: "el_dev_mago", age: 27 };
const userB = { age: 27, username: "el_dev_mago" };

// Escribe tu comparación aquí:
const result = JSON.stringify(userA) === JSON.stringify(userB); //...

console.log(result); // ¿true o false?

//comparar sin importar el orden de las claves
const user1 = { email: "mateo96@mail.com", active: true };
const user2 = { active: true, email: "mateo96@mail.com" };

// Corrige la función para que funcione correctamente:
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

const result1 = areObjectsEqual(user1, user2);

console.log(result1); // ¿true o false?

//COPIAR OBNJETOS

function shallowCopy(obj) {
  // tu código
  const copy = Object.assign({}, obj);
  return copy;
}

const myObj = {
  one: 1,
  two: 2,
  three: 3,
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy === myObj); // false

///DESTRUCTURING

const shoppingCart5 = {
  headphones: { price: 15.99, quantity: 2 },
  "pair of shoes": { price: 62.5, quantity: 1 },
  guitar: { price: 300, quantity: 1 },
};

// Escribe tu código aquí
const { price, quantity } = shoppingCart5.guitar;
console.log(price); // 300
console.log(quantity); // 1
