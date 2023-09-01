function convertPokemonToHtml(pokemon) {
  return `
    <li class="pokemon grass">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="image">
      <div class="types">
        <span class="type">Grass</span>
        <span class="type">Poison</span>
      </div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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
