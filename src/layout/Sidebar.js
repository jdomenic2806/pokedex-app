import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../actions/pokemons';
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
} from '../api/PokeApiService';

export const Sidebar = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    try {
      //   setLoading(true);
      const data = await getPokemons(50, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      //   setPokemons(results);
      dispatch(setPokemons(results));
      console.log(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <div className='col-12 d-flex justify-content-center'>
        <img
          src='/assets/logo.png'
          class='img-fluid'
          width='200'
          height='200'
          alt='Logo'
        />
      </div>
      <div className='col-12 d-flex justify-content-center'>
        <div className='row'>
          <div className='col-12'>
            <img
              src='/assets/avatar.png'
              class='rounded-circle img-fluid'
              width='200'
              height='200'
              alt='Avatar'
            ></img>
          </div>
          <div className='col-12'>
            <h2>ASHK123</h2>
          </div>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-center'></div>
      <div className='col-12 d-flex justify-content-center'>
        <h3>Level 1</h3>
      </div>
      <div className='col-12'>
        <button type='button' class='btn btn-logout d-flex'>
          <div className='col-4'>
            <img className='svgLogout' src='/assets/Icons/Logout.svg' />
          </div>
          <div className='col-4'>LOGOUT</div>
          <div className='col-4'></div>
        </button>
      </div>
    </>
  );
};
