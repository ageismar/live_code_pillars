"use strict";

const db = require("../database");
const Sequelize = require("sequelize");

// SCHEMA: set up name (string), pokedexNum (integer), element (string), description (text)

const Pokemon = db.define("pokemon", {
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

Pokemon.prototype.shoutElement = function() {
  return this.element.toUpperCase();
};

// CLASS METHOD(S):

Pokemon.getFirePokemon = async function() {
  return await Pokemon.findAll({
    where: {
      element: "fire"
    }
  });
};

// HOOKS:

//Pokemon.beforeValidate(poke => {
//   if (poke.element !== "water" || poke.element !== "fire") {
//     throw new Error("NOT WATER OR FIREEEEEEEEEEEEEEEEEEE");
//   }
// });

module.exports = Pokemon;
