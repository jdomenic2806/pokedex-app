import { types } from '../types/types';

const initialState = {
    pokemones: []
}

export const pokemonsReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.SET_POKEMONES:
            return {
                ...state,
                pokemones: state.pokemones.concat(action.payload)
            }
        default:
            return state;
    }
}
