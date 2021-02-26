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
  const dataWeakness = dataPokemon.filter(poke => poke.weaknesses.includes(valueWeakness.value));
  console.log(dataWeakness);
  return dataWeakness
};

