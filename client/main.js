import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './components/PokemonList';
import { Route, HashRouter as Router } from 'react-router-dom';
import PokemonSingle from './components/PokemonSingle';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Pokemon</h1>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:pokemonId" component={PokemonSingle} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);
