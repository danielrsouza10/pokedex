const offset = 0;
const limit = 10;
const url =
  "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + limit;

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

pokeApi.getPokemons().then((pokemons) => {
  console.log(pokemons);
  const listItems = [];
  pokemons.forEach((pokemon) => {
    //concatena a variavel atual com o retorno da funcao
    listItems.push(convertPokemonToHtml(pokemon));
  });

  console.log(listItems);
})


  //em caso de erro retorna com o catch
  // .catch((error) => console.log(error))
  //finally é sempre executado
  // .finally(() => console.log("Requisicão concluída"));
