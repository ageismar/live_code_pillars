import React, { Component } from 'react';
import axios from 'axios';
import PokemonForm from './PokemonForm';

export default class CreatePokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: '',
      element: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post('/api/pokemon', this.state);
      this.props.addPokemon(res.data);
      this.setState({
        name: '',
        element: '',
        description: ''
      });
    } catch (error) {
      console.log('Uh oh... Something went horribly wrong');
    }
  }

  render() {
    return (
      <PokemonForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={this.state.name}
        element={this.state.element}
        description={this.state.description}
      />
    );
  }
}
