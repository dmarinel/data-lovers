
export const filterPokemonsByType = (typePokemon, getPokemon) => {
  console.log(typePokemon.value, getPokemon);
  
  const dataType = getPokemon.filter((poke)=>{
    return poke.type.includes(typePokemon.value)
  })
  return dataType
};

