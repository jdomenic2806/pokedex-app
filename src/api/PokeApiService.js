export const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  