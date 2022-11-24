const express = require("express");
const { mostrarLista, mostrarDetalhes} = require("./controllers/pokemon");

const rotas = express();


rotas.get("/pokemon", mostrarLista );
rotas.get("/pokemon/:idOrName", mostrarDetalhes)
//rotas.get("/pokemon/:name", )

module.exports = rotas;