import React from "react";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  async componentDidMount() {
    // fetch pokemons from the backend
  }

  render() {
    return <div>Hello World!</div>;
  }
}

export default PokemonList;
