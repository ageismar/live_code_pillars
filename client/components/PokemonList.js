import React from 'react';
import axios from 'axios';
import SinglePokemon from './SinglePokemon';
import CreatePokemon from './CreatePokemon';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      selectedPokemon: {}
    };
    this.addPokemon = this.addPokemon.bind(this);
  }
  addPokemon(newPokemon) {
    this.setState({
      pokemon: this.state.pokemon.concat([newPokemon])
    });
  }

  async componentDidMount() {
    try {
      const pokeResult = await axios.get('/api/pokemon');
      const pokemon = pokeResult.data;
      this.setState({ pokemon });
    } catch (error) {
      console.error('something bad happened', error);
    }
  }

  render() {
    return (
      <div>
        <CreatePokemon addPokemon={this.addPokemon} />
        {this.state.pokemon.map(poke => {
          return <SinglePokemon key={poke.id} pokemon={poke} />;
        })}
      </div>
    );
  }
}

export default PokemonList;
