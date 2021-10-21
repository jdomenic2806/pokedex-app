import { types } from "../types/types"

export const setPokemons = (pokemons) => ({
    type: types.SET_POKEMONES,
    payload: pokemons
})
