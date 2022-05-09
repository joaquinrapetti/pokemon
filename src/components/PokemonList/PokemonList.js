import React, { useState, useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
  }, []);

  const generatePokemon = () => {
    console.log(pokemonList);
  };

  const pokemonItem = pokemonList.map((pokemon, index) => {
    return <Pokemon name={pokemon.name} key={index + 1} index={index + 1} />;
  });

  return (
    <>
      <h1>150 POKEMON</h1>
      {pokemonItem && <div className="grid-pokemon">{pokemonItem}</div>}
      <button onClick={generatePokemon}>Generate Pokemon</button>
    </>
  );
};

export default PokemonList;
