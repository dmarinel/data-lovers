import { filterPokemonsByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";

// Selectores
const pokemonList = document.querySelector("#pokemonList");
const typePokemon = document.querySelector(".typePokemon");

const getPokemons = data.pokemon;

// console.log(pokemonFiltro.value);

const searchPokemonsByTypes = () => {
  
  showPokemons(filterPokemonsByType(typePokemon, getPokemons))
};

// Event Change
typePokemon.addEventListener("change", searchPokemonsByTypes);


const showPokemons = (pokemonData) => {
  let pokemos = pokemonData.forEach((poke) => {
    // tbody.innerHTML = ""
    let tbody = document.createElement("tbody");
    tbody.innerHTML = `
    <tbody >
    <tr>
      <td>
        <p>#${poke.num}</p>
        <img src=${poke.img} alt=Logo ${poke.name}>
        <p>${poke.name}</p>
      </td>
    </tr>
  </tbody>
    `;
    pokemonList.appendChild(tbody);
  });
};
// showPokemons(getPokemons);
