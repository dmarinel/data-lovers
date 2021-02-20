import { filterPokemonsByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";

// Selectores
const pokemonList = document.querySelector("#pokemonList");
const typePokemon = document.querySelector(".typePokemon");

const getPokemons = data.pokemon;

const renderPokemonsAll = () =>{
  
}

const searchPokemonsByTypes = () => {
  showPokemons(filterPokemonsByType(typePokemon, getPokemons));
};

// const showPokemons = (pokemonData) => {
  
//   let pokemos = pokemonData.forEach((poke) => {
//     let tbody = document.createElement("tbody");
//     tbody.innerHTML = `
//     <tr>
//       <td>
//         <p>#${poke.num}</p>
//         <img src=${poke.img} alt=Logo ${poke.name}>
//         <p>${poke.name}</p>
//       </td>
//     </tr>
//     `;
//     pokemonList.appendChild(tbody);
//   });
// };

// Event Change
typePokemon.addEventListener("change", searchPokemonsByTypes);
