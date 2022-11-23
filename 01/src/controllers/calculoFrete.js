const { getStateFromZipcode } = require("utils-playground");
const produtos = require("../bancodedados/produtos.js")


function listagemProdutos(req, res) {
    return res.status(200).json(produtos);
}

function detalhamentoProduto(req, res) {
    const id = req.params.idProduto;

    const produto = produtos.find((item) => {return item.id === Number(id)});

    if (!produto) {
        return res.status(404).json({"mensagem": "Produto não encontrado!"})
    }

    return res.status(200).json(produto);
}

async function calculoFrete(req, res) {
    const id = req.params.idProduto;
    const cep = req.params.cep;

    let frete = 0;
    
    const produto = produtos.find((item) => {return item.id === Number(id)});
    
    if (!produto) {
        return res.status(404).json({"mensagem": "Produto não encontrado!"})
    }

    const estado = await getStateFromZipcode(cep);

    if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
        frete = produto.valor * 0.1;
    } else if (estado === "SP" || estado === "RJ") {
        frete = produto.valor * 0.15;
    } else {
        frete = produto.valor * 0.12;
    }

    return res.status(200).json({
        "produto": produto,
        "estado": estado,
        "frete": frete
    })

}


module.exports = {
    listagemProdutos,
    detalhamentoProduto,
    calculoFrete
}