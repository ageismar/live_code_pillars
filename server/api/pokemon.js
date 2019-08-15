const router = require("express").Router();
const { Pokemon } = require("../db/index");

/* Write a route for getting:
    - deleting a pokemon by id

    if time allows:
    - get Pokemon by id
*/

router.get("/", async (req, res, next) => {
  try {
    const pokes = await Pokemon.findAll();
    res.send(pokes);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPoke = await Pokemon.create(req.body);
    res.status(201).send(newPoke);
  } catch (error) {
    next(error);
  }
});

// const numAffectedRows = await Pug.destroy({
//     where: {
//       age: 7 // deletes all pugs whose age is 7
//     }
//   })

router.delete("/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const deletedPoke = await Pokemon.destroy({
      where: {
        name: name
      }
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
