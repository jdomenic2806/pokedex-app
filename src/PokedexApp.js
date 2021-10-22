import React, { useState, useEffect } from 'react';
import { Sidebar } from './layout/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage';
import { SearchHeader } from './layout/SearchHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
} from './api/PokeApiService';
import { setPokemons } from './actions/pokemons';
import { DetailsPokemonPage } from './pages/DetailsPokemonPage';
import { Loading } from './components/Loading';
export const PokedexApp = () => {

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const pokemones = useSelector(state => state.pokemones)

  const fetchPokemons = async () => {
    try {
      //   setLoading(true);
      const data = await getPokemons(800, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      //   setPokemons(results);
      dispatch(setPokemons(results));
      setLoading(false)
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className="sticky-top d-none d-sm-block d-sm-none d-md-block">

          <div className='col-2 backgroundSidebar pb-5 pt-5 d-flex align-content-between flex-wrap' >
            <Sidebar />
          </div>
          </div>
          <div className='col-sm-12 col-xs-12 col-md-10 col-lg-10 backgroundPokemons'>
            <div className="container-fluid pb-4">
              <SearchHeader />
            </div>
            <Switch>
              <Route path='/' exact>
                <div className="container-fluid">
                  {
                    loading 
                      ? <Loading />
                      : <PokemonsPage />
                  }
                </div>  
              </Route>
              <Route path='/detail/:name' exact>
                  <DetailsPokemonPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
