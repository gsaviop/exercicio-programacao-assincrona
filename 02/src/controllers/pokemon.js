const { listarPokemons, detalharPokemon } = require("utils-playground");


const mostrarLista = async(req, res) => {
    const { pagina } = req.query;

    const pokeLista = await listarPokemons(pagina);

    return res.status(200).json(pokeLista);
} 

const mostrarDetalhes = async(req, res) => {
    const { idOrName } = req.params;

    const pokemonEscolhido = await detalharPokemon(idOrName);

    const listaDetalhes = {
        "id": pokemonEscolhido.id,
        "name": pokemonEscolhido.name,
        "height": pokemonEscolhido.height,
        "weight": pokemonEscolhido.weight,
        "base_experience": pokemonEscolhido.base_experience,
        "forms": pokemonEscolhido.forms,
        "abilities": pokemonEscolhido.abilities,
        "species": pokemonEscolhido.species
    };

    return res.status(200).json(listaDetalhes);

}

module.exports = {
    mostrarLista,
    mostrarDetalhes
}