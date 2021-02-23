import { filterPokemonsByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";

// Selectores
const pokemonList = document.querySelector("#pokemonList");
const typePokemon = document.querySelector(".typePokemon");
const getPokemons = data.pokemon;


const arrayNinePokemon = []

const arrayPokemon = (dataPokemons) =>{
  const dataNinePokemon = dataPokemons.slice(0,9)
 console.log(dataNinePokemon);
 return dataNinePokemon
}

arrayPokemon(getPokemons)



// const searchPokemonsByTypes = () => {
//   showPokemons(filterPokemonsByType(typePokemon, getPokemons));
// };

const showPokemons = (pokemonData) => {
  let pokemos = pokemonData.forEach((poke) => {
    let div = document.createElement("div");
    div.classList.add('right__list-ul')
    div.innerHTML = `
              <ul class="right__ul">
                <li class="right__ul-li">
                  <p>#${poke.num}</p>
                  <img src=${poke.img} alt="">
                  <span>${poke.name}</span>
                </li>
              </ul>
    `;
    pokemonList.append(div);
  });
};

showPokemons(arrayPokemon(getPokemons))

// Event Change
// typePokemon.addEventListener("change", searchPokemonsByTypes);
