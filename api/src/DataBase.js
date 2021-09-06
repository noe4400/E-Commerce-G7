const path = require("path");
const BASE_URL = path.join(__dirname, "public/uploads/");

const categorySet = [
  "remeras",
  "camperas",
  "clasico",
  "pantalones",
  "mochilas",
  "gorros",
  "caps",
  "camisas",
  "urbano",
  "buzos",
];
const dataBase = [
  {
    name: "REMERA RETRO O'NEILL Y",
    sizes: {
      XS: 28,
      XL: 11,
      S: 0,
    },
    price: "2138",
    color: "amarillo",
    genre: "Femenino",
    type: "camperas",
    categories: ["clasico"],
    detail:
      "- Remera manga corta, escote redondo con ribb a tono, Estampa 1 color en frente.\n- Calce: Clasica Oversize\nMaterial\nAlgodon / Viscosa",
    files: [
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-Y-amarillo1.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-Y-amarillo2.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-Y-amarillo3.jpg",
      },
    ],
  },
  {
    name: "REMERA RETRO O'NEILL",
    sizes: {
      M: 1,
      L: 22,
    },
    price: "2138",
    color: "blanco",
    genre: "Femenino",
    type: "remeras",
    categories: ["clasico"],
    detail:
      "- Remera manga corta, escote redondo con ribb a tono, Estampa 1 color en frente.\n- Calce: Clasica Oversize\nMaterial\nAlgodon / Viscosa",
    files: [
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-blanco1.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-blanco2.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-RETRO-ONEILL-blanco3.jpg",
      },
    ],
  },
  {
    name: "REMERA OK STAR O'NEILL",
    sizes: {
      M: 20,
      XS: 10,
    },
    price: "2990",
    color: "rosado",
    genre: "Masculino",
    type: "remeras",
    categories: ["clasico"],
    detail:
      "Remera manga corta, escote redondo con ribb a tono.\nEstampa en el pecho y en la espalda.\nCalce regular.",
    files: [
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-OK-STAR-ONEILL-rosado1.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-OK-STAR-ONEILL-rosado2.jpg",
      },
      {
        mimetype: "image/jpeg",
        originalname: "REMERA-OK-STAR-ONEILL-rosado3.jpg",
      },
    ],
  },
  // {
  //   name: "REMERA LEFT COAST O'NEILL",
  //   size: "M",
  //   price: 2138,
  //   color: "negro",
  //   stock: 50,
  //   genre: "Masculino",
  //   categories: ["remeras"],
  //   detail:
  //     "Remera manga corta, escote redondo con ribb a tono. Estampa en el frente.\nMaterial\n100% algodón.\nCalce regular",
  //   files: [],
  // },
  // {
  //   name: "PANTALÓN CORD O'NEILL",
  //   size: "L",
  //   price: 7300,
  //   color: "negro",
  //   stock: 15,
  //   genre: "Masculino",
  //   categories: ["pantalones"],
  //   detail:
  //     "Pantalón tipo jogger con 2 bolsillos laterales.\nCintura elastizada, cordón para ajustar.\nPuños elastizados.\nCalce regular",
  //   files: [],
  // },
  // {
  //   name: "MOCHILA EASY RIDER O'NEILL",
  //   size: "Unico",
  //   price: 1500,
  //   color: "gris",
  //   stock: 25,
  //   genre: "Masculino",
  //   categories: ["mochilas"],
  //   detail:
  //     "- Compartimiento interno para laptop.\n- Tiras de hombros acolchonadas.\n- Bolsillo lateral de mesh.\n- Logo reflectivo.\n- Bolsillo externo frontal.\n-Dimensiones: 48 x 31 x 21.\n- Capacidad 30 L.",
  //   files: [],
  // },
  // {
  //   name: "JOGGER ELENA PRINTED O'NEIL",
  //   size: "S",
  //   price: 4200,
  //   color: "azul marino",
  //   stock: 36,
  //   genre: "Femenino",
  //   categories: ["pantalones"],
  //   detail:
  //     "Jogger con bolsillos, cintura ajustable y puños elastizados.\nEstampa en pierna.\nMaterial\n60 % Algodón - 40 % Poliester.",
  //   files: [],
  // },
  // {
  //   name: "PANTALÓN LAVIN O'NEILL",
  //   size: "36",
  //   price: 1500,
  //   color: "bordo",
  //   stock: 42,
  //   genre: "Masculino",
  //   categories: ["pantalones"],
  //   detail:
  //     "Pantalón de jean 5 bolsillos con lavado stonewash.\nCalce Regular\nmateriales\n97% Algodón - 3% Elastano.",
  //   files: [],
  // },
  // {
  //   name: "GORRO BRIX BEANIE O'NEILL",
  //   size: "Unico",
  //   price: 1500,
  //   color: "azul marino",
  //   stock: 26,
  //   genre: "Femenino",
  //   categories: ["gorros"],
  //   detail:
  //     "Gorro tejido largo, con lurex.\nCalce relajado.\nMaterial\n100% Acrílico.",
  //   files: [],
  // },
  // {
  //   name: "GORRO BLOKE II O'NEILL",
  //   size: "Unico",
  //   price: 1500,
  //   color: "bordo",
  //   stock: 30,
  //   genre: "Masculino",
  //   categories: ["gorros"],
  //   detail:
  //     "- Gorro tejido con doblez.\n- Etiqueta externa\n- Calce Relaxed.\n- Talle Unico.",
  //   files: [],
  // },
  // {
  //   name: "CAP STOWELL II O'NEILL",
  //   size: "Unico",
  //   price: 279,
  //   color: "beige",
  //   stock: 123,
  //   genre: "Masculino",
  //   categories: ["caps"],
  //   detail:
  //     "- Cap O'Neill 6 paneles de corderoy\n- Vicera curva.\n- Parche de PU.\n- Ajuste de tela.\n- Calce regular.\nMaterial \n100% Algodon.",
  //   files: [],
  // },
  // {
  //   name: "CAMPERA ONTARIO O'NEILL",
  //   size: "M",
  //   price: 14400,
  //   color: "amarillo",
  //   stock: 6,
  //   genre: "Femenino",
  //   categories: ["camperas", "urbano"],
  //   detail:
  //     "Campera urbana femenina con canelones y capucha.\nAbertura cierre plástico.\nCintura y puños con elástico.\nCalce: regular a la cadera.\nMaterial\n100% Poliester.",
  //   files: [],
  // },
  // {
  //   name: "CAMPERA KENAI O'NEILL",
  //   size: "XL",
  //   price: 15200,
  //   color: "verde",
  //   stock: 35,
  //   genre: "Masculino",
  //   categories: ["camperas"],
  //   detail:
  //     "Campera tipo parka con capucha forrada en micropolar y piel sintética.\n4 bolsillos.\nInterior acanalado con cordón para ajustar.\nMangas con puños y velcro.",
  //   files: [],
  // },
  // {
  //   name: "CAMPERA GALA O'NEILL",
  //   size: "XXL",
  //   price: 11600,
  //   color: "azul marino",
  //   stock: 8,
  //   genre: "Masculino",
  //   categories: ["camperas"],
  //   detail:
  //     "Campera con capucha ajustable.\nCanelones anchos y cierre central plástico.\nDos bolsillos con botones a presión y puños regulables con velcro.\nMATERIALES\nRelleno 100% Silicona.",
  //   files: [],
  // },
  // {
  //   name: "CAMPERA BANDALE O'NEILL",
  //   size: "S",
  //   price: 1200,
  //   color: "rojo",
  //   stock: 5,
  //   genre: "Femenino",
  //   categories: ["camperas"],
  //   detail:
  //     "-Campera clásica larga, con relleno y canelones.\n-Cierre frontal, bolsillos laterales y cuello alto.\n-Interior de frente, espalda y capucha forrado en piel sintética.\n-Calce: Regular\nMaterial\n100% Poliester.",
  //   files: [],
  // },
  // {
  //   name: "CAMISA LUMBER O'NEILL",
  //   size: "L",
  //   price: 7499,
  //   color: "ladrillo gris",
  //   stock: 10,
  //   genre: "Masculino",
  //   categories: ["camisas"],
  //   detail:
  //     "Camisa manga larga, tipo leñadora, de viyela peinada.\nMATERIALES\n100% Algodón",
  //   files: [],
  // },
  // {
  //   name: "CAMISA HAMPTON O'NEILL",
  //   size: "M",
  //   price: 4320,
  //   color: "azul",
  //   stock: 2,
  //   genre: "Femenino",
  //   categories: ["camisas"],
  //   detail:
  //     "Camisa de mujer manga larga de fibrana rayada.\nBolsillos en el pecho y cartera con botones.\nCalce: Overzise.",
  //   files: [],
  // },
  // {
  //   name: "CAMISA DORY O'NEILL",
  //   size: "XS",
  //   price: 6999,
  //   color: "azul",
  //   stock: 10,
  //   genre: "Masculino",
  //   categories: ["camisas"],
  //   detail:
  //     "Camisa manga larga tipo leñadora de viyela\nMATERIALES\n100% Algodón",
  //   files: [],
  // },
  // {
  //   name: "BUZO CANGURO COAST",
  //   size: "XXL",
  //   price: 4830,
  //   color: "lila",
  //   stock: 89,
  //   genre: "Masculino",
  //   categories: ["buzos"],
  //   detail:
  //     "Buzo canguro con capucha. estampa en el frente. Cordón redondo con ojalillos y puntera metálicos.",
  //   files: [],
  // },
];
module.exports = { dataBase, categorySet };