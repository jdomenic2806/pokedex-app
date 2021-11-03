import React, { useEffect, useState } from 'react';
import colorTypes from '../helpers/colorTypes';
import { useLocation, useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PokemonCard = ({pokemon, index}) => {
  const [isHome, setIsHome] = useState(false);
  let history = useHistory();
  const { pathname } = useLocation();

  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  };

  useEffect(() => {
    if (pathname === '/') {
      setIsHome(true);
    }
  }, []);

  return (
    <>
      <div
        className={isHome ? 'col-md-6 col-sm-6 col-lg-4 col-xs-12' : 'col-12'}
        onClick={() => history.push('/detail/' + pokemon.name)}
      >
        <div
          className={
            isHome
              ? 'card p-3 mb-3 cardShadow pointer'
              : 'card p-3 mb-3 cardShadow'
          }
        >
          {isHome && (
            <div className='card-body'>
              <h4 className='card-title text-center'>
                {pokemon.name.charAt(0).toUpperCase() +
                  pokemon.name.slice(1)}
              </h4>
              <h5 className='card-title text-center'>
                {pad(pokemon.id, 3)}
              </h5>
            </div>
          )}
          <div className="text-center">
          <LazyLoadImage
            className="text-center"
            visibleByDefault={false}
            width={200}
            height={200}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />

          </div>
          {isHome && (
            <div className='card-body text-center'>
              {pokemon.types.map((type, index) => {
                return (
                  <span
                    className='badge'
                    style={{ backgroundColor: colorTypes[type.type.name] }}
                    key={index}
                  >
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </span>
                );
              })}
            </div>
          )}
          {!isHome && (
            <div className='card-body text-center'>
              <LazyLoadImage
                visibleByDefault={false}
                src={pokemon.sprites.front_default}
              />
              <LazyLoadImage
                visibleByDefault={false}
                src={pokemon.sprites.back_default}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
