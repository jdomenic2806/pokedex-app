import { types } from '../types/types';

const initialState = {
    pokemons: []
}

export const pokemonsReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.SET_POKEMONES:
            return {
                ...state,
                pokemons: action.payload 
            }
        default:
            return state;
    }
}
