const pokeApi = [];

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);

    //[array] = array pega o primeiro elemento do array e armazena
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;


    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url =
        "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + limit;
    return fetch(url)
        //converte o response em formato json
        .then((response) => response.json())
        //pega o retorno do primeiro then e joga no segundo e transforma em uma lista só com os results que queremos que sao os pokemons
        .then((jsonBody) => jsonBody.results)
        //mapeia a lista retornada e extrai os detalhes fazendo novas requisicoes pela funcao getPokemonDetail
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        //pega a lista de requisicoes e aguarda ate que todas as requisicoes terminem
        .then((detailRequests) => Promise.all(detailRequests))
        //quando as requisicoes terminarem, apresente os resultados em forma de lista
        .then((pokemonsDetails) => pokemonsDetails)

}
