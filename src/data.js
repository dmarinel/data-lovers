export const filterPokemonsByType = (typePokemon, dataPokemon) => {
  if (typePokemon.value === "all") {
    return dataPokemon;
  } else {
    // array funtion filter =>
    const dataType = dataPokemon.filter((poke) => {
      return poke.type.includes(typePokemon.value);
    });
    return dataType;
  }
};

export const filterPokemonByWeakness = (valueWeakness, dataPokemon) => {
  if(valueWeakness.value === "all"){
    return dataPokemon
  }else{
    const dataWeakness = dataPokemon.filter(poke => poke.weaknesses.includes(valueWeakness.value));
  return dataWeakness
  }
  
};
export const filterPokemonByResistant = (valueResistant, dataPokemon) =>{
  if (valueResistant.value === 'all') {
    return dataPokemon
  }else {
    const dataResistant = dataPokemon.filter(poke => poke.resistant.includes(valueResistant.value))
  return dataResistant
  }
}

export const sortData = () =>{

}

export const  seachData = () =>{
  
}