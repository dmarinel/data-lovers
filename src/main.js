// import { getPokemons } from './data.js';
import data from "./data/pokemon/pokemon.js";

// Selectores
const pokemonList = document.querySelector("#pokemonList");

const getPokemons = data.pokemon;
// console.log(getPokemons );

const showPokemons = (pokemonData) => {

  let pokemos = pokemonData.forEach((poke) => {
//    console.log(poke.num , poke.name, poke.img);
let tbody = document.createElement("tbody")

    tbody.innerHTML =`
    <tbody >
    <tr>
      <td>
        <p>#${poke.num}</p>
        <img src=${poke.img} alt=Logo ${poke.name}>
        <p>${poke.name}</p>
      </td>
    </tr>
  </tbody>
    `
    pokemonList.appendChild(tbody)

  });
  console.log(pokemos);
};

showPokemons(getPokemons);
