// NavyStore: completa los datos de cada prenda antes de publicarla.
// Cambia available a true solo cuando precio, tallas y stock estén correctos.
// Ejemplo: sizes: ["S", "M", "L"], stock: { S: 2, M: 3, L: 1 }
// Usa un id de texto único para cada prenda. Edita este archivo en GitHub.
const NAVYSTORE_PRODUCTS = [
  {
    id: "prenda-001",
    name: "Camisa negra nike",
    price: 125,
    category: "hombre",
    sizes:["S"],
    stock:{ S: 1},
    description: "uso cotidiano",
    image: "imagenes/prenda-001.jpeg",
    photos: ["imagenes/prenda-001.jpeg"],
    available:true
  },
  {
    id: "prenda-002",
    name: "Camisa 02 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-002.jpeg",
    photos: ["imagenes/prenda-002.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-003",
    name: "Camisa 03 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-003.jpeg",
    photos: ["imagenes/prenda-003.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-004",
    name: "Camisa 04 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-004.jpeg",
    photos: ["imagenes/prenda-004.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-005",
    name: "Camisa 05 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-005.jpeg",
    photos: ["imagenes/prenda-005.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-006",
    name: "Camisa 06 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-006.jpeg",
    photos: ["imagenes/prenda-006.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-007",
    name: "Pantalón 07 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-007.jpeg",
    photos: ["imagenes/prenda-007.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-008",
    name: "Pantalón 08 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-008.jpeg",
    photos: ["imagenes/prenda-008.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-009",
    name: "Sudadera 09 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-009.jpeg",
    photos: ["imagenes/prenda-009.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  },
  {
    id: "prenda-010",
    name: "Sudadera 10 - EDITAR NOMBRE",
    price: 0, // CAMBIAR: precio en quetzales, por ejemplo 125
    category: "hombre", // "hombre", "mujer" o "unisex"
    sizes: [], // CAMBIAR: por ejemplo ["S", "M", "L"]
    stock: {}, // CAMBIAR: unidades por talla; por ejemplo { S: 2, M: 3, L: 1 }
    description: "EDITAR DESCRIPCIÓN",
    image: "imagenes/prenda-010.jpeg",
    photos: ["imagenes/prenda-010.jpeg"],
    available: false // CAMBIAR a true cuando completes los datos
  }
];
