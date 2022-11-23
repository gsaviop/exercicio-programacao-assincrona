const express = require("express");
const rotas = express();

const frete = require("./controllers/calculoFrete.js")

rotas.get("/produtos", frete.listagemProdutos)
rotas.get("/produtos/:idProduto", frete.detalhamentoProduto)
rotas.get("/produtos/:idProduto/frete/:cep", frete.calculoFrete)

module.exports = rotas;