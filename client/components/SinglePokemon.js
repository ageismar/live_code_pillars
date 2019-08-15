import React from "react";

// Create a component that displays a Pokemon's name and description

const SinglePokemon = props => {
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <p>{props.pokemon.description}</p>
    </div>
  );
};

export default SinglePokemon;
