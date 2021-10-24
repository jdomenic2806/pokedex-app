import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchPokemon } from "../api/PokeApiService";
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonInfoCard } from "../components/PokemonInfoCard";
import { useHistory } from "react-router-dom";
import { NotFound } from "../components/NotFound";

export const DetailsPokemonPage = () => {
  let { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  let history = useHistory();

  const getPokemonData = async () => {
    try {
      const data = await searchPokemon(name);
      setPokemon(data);
      setLoading(false);
      console.log("data ", data);
    } catch (error) {}
  };

  useEffect(() => {
    getPokemonData();
  }, [name]);

  return (
    <div className="container-fluid">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <button
                style={{ marginTop: "-60px" }}
                className="btn btn-back btn-small mb-5"
                onClick={() => history.push("/")}
              >
                <img src="/assets/Icons/Back.svg" />
              </button>
            </div>
          </div>
          {pokemon ? (
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <PokemonCard pokemon={pokemon} />
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <PokemonInfoCard pokemon={pokemon} />
              </div>
            </div>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
};
