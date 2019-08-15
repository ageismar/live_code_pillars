"use strict";

const db = require("../database");
const Sequelize = require("sequelize");

// SCHEMA: set up name, badges (array of strings)
const Trainer = db.define("trainer", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  badges: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
});

Trainer.prototype.countBadges = function() {
  return this.badges.length;
};

module.exports = Trainer;
