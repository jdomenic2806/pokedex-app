import React from "react";
import colorTypes from "../helpers/colorTypes";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const PokemonInfoCard = (props) => {
  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  
  console.log('card2 ',props)

  return (
    <div className="container-fluid">
      <div className="card p-3 mb-3 cardShadow">
        <div className="card-body">
          <h2 className="card-title">
            {props.pokemon.name.charAt(0).toUpperCase() +
              props.pokemon.name.slice(1)}
          </h2>
          {props.pokemon.types.map((type) => {
              return (
                <span
                  className="badge"
                  style={{ backgroundColor: colorTypes[type.type.name] }}
                >
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </span>
              );
            })}
        </div>
        <div className="card-body">
          <h6 className="card-title">Pokedex Number</h6>
          <p>{pad(props.pokemon.id, 3)}</p>
          <hr />
          <h6 className="card-title">Height</h6>
          {props.pokemon.height}
          <hr />
          <h6 className="card-title">Weight</h6>
          {props.pokemon.weight}
          <hr />
          <h6 className="card-title">Shiny</h6>
          <div className="card-body d-flex">
            <LazyLoadImage
              visibleByDefault={false}
              src={props.pokemon.sprites.front_shiny}
            />
            <LazyLoadImage
              visibleByDefault={false}
              src={props.pokemon.sprites.back_shiny}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
