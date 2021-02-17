export const filterPokemonsByType = (typePokemon, getPokemon) => {
  console.log(typePokemon.value, getPokemon);
  
  const dataType = getPokemon.filter((poke)=>{
    return poke.type.includes(typePokemon.value)
    // console.log(poke.type);
    // let dataType = poke.type
    // console.log(dataType);
    // let newArrayType = dataType.filter(type => type === typePokemon.value)
    // console.log(newArrayType);
  })
  return dataType
};

