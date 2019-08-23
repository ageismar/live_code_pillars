import React, { Component } from 'react';
import SinglePokemon from './SinglePokemon';
import UpdatePokemon from './UpdatePokemon';
import axios from 'axios';

export default class PokemonSingle extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(updatedPokemon) {
    this.setState({ pokemon: updatedPokemon });
  }

  async componentDidMount() {
    const pokemonId = this.props.match.params.pokemonId;
    const res = await axios.get(`/api/pokemon/${pokemonId}`);
    this.setState({ pokemon: res.data });
  }

  render() {
    const pokemon = this.state.pokemon;

    return (
      <div id="single-pokemon">
        <SinglePokemon pokemon={pokemon} />
        {pokemon.id && (
          <UpdatePokemon pokemon={pokemon} updatePokemon={this.updatePokemon} />
        )}
      </div>
    );
  }
}
