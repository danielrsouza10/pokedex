const buttonMore = document.getElementById('loadMore')
let offset = 0;
let limit = 10;
const maxPokemonsAllowed = 151;

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
function loadPokemons(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToHtml).join("");
    pokemonList.innerHTML += newHtml;
  })
}


loadPokemons(offset, limit);

buttonMore.addEventListener('click', () => {
  offset += limit;
  const pokemonsListed = offset + limit;

  if (pokemonsListed <= maxPokemonsAllowed) {
    loadPokemons(offset, limit);
  } else {
    newLimit = maxPokemonsAllowed - offset;
    loadPokemons(offset, newLimit);
    buttonMore.parentElement.removeChild(buttonMore);
  }

})