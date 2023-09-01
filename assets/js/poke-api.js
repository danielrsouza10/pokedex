const pokeApi = [];

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url =
        "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + limit;
    return fetch(url)
        //converte o response em formato json
        .then((response) => response.json())
        //pega o retorno do primeiro then e joga no segundo
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.log(error));
}