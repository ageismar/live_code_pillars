import React from "react";
import { Link } from 'react-router-dom';

// Create a component that displays a Pokemon's name and description

const SinglePokemon = props => {
  return (
    <div>
      <Link to={`/pokemon/${props.pokemon.id}`}>
      <h2>{props.pokemon.name}</h2>
      </Link>
      <p>{props.pokemon.description}</p>
    </div>
  );
};

export default SinglePokemon;
