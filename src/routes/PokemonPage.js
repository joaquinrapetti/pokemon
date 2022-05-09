import React from "react";
import Hero from "../components/Hero/Hero";
import PokemonList from "../components/PokemonList/PokemonList";

const PokemonPage = () => {
  return (
    <>
      <Hero text="POKEMON PAGE" />
      <PokemonList />
    </>
  );
};

export default PokemonPage;
