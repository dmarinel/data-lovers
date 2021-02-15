
export const getPokemons= (objectData) => {
    const arrayData = objectData.pokemon
    let getPokemon = arrayData.map((poke)=>{
      let pokemonNumber = poke.num
      let pokemonName = poke.name
      let pokemonImage = poke.img
      return  pokemonNumber
    })
  return getPokemon
};

