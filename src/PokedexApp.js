import React, { useState, useEffect } from 'react';
import { Sidebar } from './layout/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage';
import { SearchHeader } from './layout/SearchHeader';
import { useDispatch } from 'react-redux';
import { getPokemonData, getPokemons } from './api/PokeApiService';
import { setPokemons } from './actions/pokemons';
import { DetailsPokemonPage } from './pages/DetailsPokemonPage';
import { Loading } from './components/Loading';
import { SidebarMobile } from './layout/SidebarMobile';
import { useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
export const PokedexApp = () => {
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=21'
  );
  const pokemones = useSelector((state) => state.pokemones.pokemones);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(loadMore);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      dispatch(setPokemons(results));
      setLoadMore(data.next);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 d-none d-sm-none d-lg-block backgroundSidebar pb-5 pt-5 d-flex align-content-between flex-wrap sticky-top'>
            <Sidebar />
          </div>
          <div className='col-sm-12 col-xs-12 d-lg-none d-lg-block d-sm-block d-md-block menu-mobile'>
            <SidebarMobile />
          </div>
          <div className='col-lg-10 col-md-12 col-sm-12 col-xs-12 backgroundPokemons'>
            <div className='container-fluid pb-4'>
              <SearchHeader />
            </div>
            <Switch>
              <Route path='/' exact>
                <div className='container-fluid'>
                  {loading ? (
                    <Loading />
                  ) : (
                    <>
                    <InfiniteScroll
                      dataLength={pokemones.length}
                      next={fetchPokemons}
                      hasMore={true}
                      loader={<h4>Loading...</h4>}
                    >
                      <PokemonsPage />
                    </InfiniteScroll>
                      {/* <div className='container'>
                        <div className='row'>
                          <div className='col-12 text-center'>
                            <button
                              className='btn btn-lg btnLoadMore'
                              onClick={() => fetchPokemons()}
                            >
                              Load More
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </>
                  )}
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