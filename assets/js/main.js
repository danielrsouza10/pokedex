function convertPokemonToHtml(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="image">
      <div class="types">
        ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join("")}
      </div>
      <img
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

//pokemons = [] é uma lista vazia para caso nao retorne conteudo sempre retorne uma lista mesmo que vazia
pokeApi.getPokemons().then((pokemons = []) => {

  // //a funcao map percorre uma lista e retorna uma nova lista
  // const newList = pokemons.map((pokemon) => convertPokemonToHtml(pokemon));

  // //metodo join junta os elementos que antes estavam separados e transforma em uma string
  // const newHtml = newList.join("");

  // pokemonList.innerHTML += newHtml;

  //tudo isso que esta acima pode ser resumido a uma unica linha

  pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join("");
})


  //em caso de erro retorna com o catch
  // .catch((error) => console.log(error))
  //finally é sempre executado
  // .finally(() => console.log("Requisicão concluída"));
