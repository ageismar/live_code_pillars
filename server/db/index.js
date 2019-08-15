const db = require("./database");
const Pokemon = require("../db/models/pokemon");
const Trainer = require("../db/models/trainer");
// REQUIRED: SET UP ASSOCIATIONS

Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

module.exports = {
  Trainer,
  Pokemon,
  db
};
