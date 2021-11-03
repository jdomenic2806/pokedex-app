import React from "react";
import colorTypes from "../helpers/colorTypes";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const PokemonInfoCard = ({pokemon}) => {
  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  return (
    <div className="container-fluid">
      <div className="card p-3 mb-3 cardShadow">
        <div className="card-body">
          <h2 className="card-title">
            {pokemon.name.charAt(0).toUpperCase() +
              pokemon.name.slice(1)}
          </h2>
          {pokemon.types.map((type, index) => {
              return (
                <span
                  className="badge"
                  style={{ backgroundColor: colorTypes[type.type.name] }}
                  key={index}
                >
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </span>
              );
            })}
        </div>
        <div className="card-body">
          <h6 className="card-title">Pokedex Number</h6>
          <p>{pad(pokemon.id, 3)}</p>
          <hr />
          <h6 className="card-title">Height</h6>
          {pokemon.height}
          <hr />
          <h6 className="card-title">Weight</h6>
          {pokemon.weight}
          <hr />
          <h6 className="card-title">Shiny</h6>
          <div className="card-body d-flex">
            <LazyLoadImage
              visibleByDefault={false}
              src={pokemon.sprites.front_shiny}
            />
            <LazyLoadImage
              visibleByDefault={false}
              src={pokemon.sprites.back_shiny}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
