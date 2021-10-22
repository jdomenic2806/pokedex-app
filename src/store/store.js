import { combineReducers, createStore } from "redux";
import { pokemonsReducer } from "../reducers/pokemonsReducer";

const reducers = combineReducers({
    pokemones: pokemonsReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);