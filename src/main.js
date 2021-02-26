import { filterPokemonsByType,filterPokemonByWeakness} from "./data.js";
import data from "./data/pokemon/pokemon.js";

// Selectores
const pokemonList = document.querySelector("#pokemonList");
const typePokemon = document.querySelector(".typePokemon");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
// Get pokemons
const getPokemons = data.pokemon;
// Variables Globales
let dataPoke = getPokemons;
let cp1 = 0;
let cp2 = 9;

// funcion cantida de tipos
// console.log(typesOfPokemon(dataPoke));

// Funciones de paginacion
const nextPage = (dataPokemon) => {
  cp1 += 9;
  cp2 += 9;
  showPokemons(dataPokemon.slice(cp1, cp2));
};

const previousPage = (data) => {
  cp1 -= 9;
  cp2 -= 9;
  showPokemons(data.slice(cp1, cp2));
};

// Funcion de eventos
const nextNavigationPage = (data) => {
  nextPage(data);
};

const previousNavigationPage = (data) => {
  previousPage(data);
};

const filterPokemons = () => {
  dataPoke = filterPokemonsByType(typePokemon, getPokemons);
  dataPoke = filterPokemonByWeakness(typePokemon, getPokemons)
  // showPokemons(dataPoke);
  nextPage(dataPoke);
  previousPage(dataPoke);
};

const showPokemons = (pokemonData) => {
  // innerHTML = '' => limpiar pokemonList
  pokemonList.innerHTML = "";
  pokemonData.forEach((poke) => {
    let div = document.createElement("div");
    div.classList.add("right__list-ul");
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

// ver los primeros 9 pokemos => inicializar
showPokemons(dataPoke.slice(cp1, cp2));

// Event Change
typePokemon.addEventListener("change", filterPokemons);

// event of pagination
nextButton.addEventListener("click", () => nextNavigationPage(dataPoke));
previousButton.addEventListener("click", () =>
  previousNavigationPage(dataPoke)
);
