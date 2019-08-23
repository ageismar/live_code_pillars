'use strict';

const db = require('../database');
const Sequelize = require('sequelize');

//add column with number of times a poke is caught
//it should always initialize to one

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING
  },
  pokedexNum: {
    type: Sequelize.INTEGER
  },
  element: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

// INSTANCE METHOD
//create a method called isCaliente and will return true if the pokemon is a fire type

// CLASS METHOD(S)
//create a method to return all the pokemon with the word 'mouse' in their description.

// HOOKS
//everytime the trainerId is changed, the caught number increments by 1

module.exports = Pokemon;
