import React, { Component } from 'react';
import axios from 'axios';
import PokemonForm from './PokemonForm';

export default class UpdatePokemon extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
      const res = await axios.put(
        '/api/pokemon/' + this.props.pokemon.id,
        this.state
      );
      this.props.updatePokemon(res.data);
      this.setState({
        name: '',
        element: '',
        description: ''
      });
    } catch (error) {
      console.log('uh oh.. something went wrong');
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.pokemon.name,
      element: this.props.pokemon.element,
      description: this.props.pokemon.description
    });
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
