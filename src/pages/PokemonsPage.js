import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonsPage = () => {
  const pokemones = useSelector((state) => state.pokemones.pokemones);
  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          {pokemones.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};
