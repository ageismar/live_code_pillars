import React from "react";
import axios from "axios";
import SinglePokemon from "./SinglePokemon";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemons: []
    };
  }

  async componentDidMount() {
    try {
      const pokeResult = await axios.get("/api/pokemon");
      const allPokemons = pokeResult.data;
      this.setState({ allPokemons });
    } catch (error) {
      console.error("something bad happened", error);
    }
  }

  render() {
    return (
      <div>
        {this.state.allPokemons.map(poke => {
          return <SinglePokemon key={poke.id} pokemon={poke} />;
        })}
      </div>
    );
  }
}

export default PokemonList;
