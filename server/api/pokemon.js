const router = require('express').Router();
const { Pokemon } = require('../db/index');

/* Write a route for..
-Listing all the pokemon
-listing a pokemon by Id
  -include control flow for error handling
-creating a pokemon
-updating a pokemon in real time

if we have time:
-delete a pokemon

*/

router.get('/', async (req, res, next) => {
  try {
    const pokes = await Pokemon.findAll();
    res.send(pokes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const poke = await Pokemon.findByPk(req.params.id);
    res.send(poke);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPoke = await Pokemon.create(req.body);
    res.status(201).send(newPoke);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [, [updatedPoke]] = await Pokemon.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    });
    res.json(updatedPoke);
  } catch (error) {
    next(error);
  }
});

// const numAffectedRows = await Pug.destroy({
//     where: {
//       age: 7 // deletes all pugs whose age is 7
//     }
//   })

router.delete('/:name', async (req, res, next) => {
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
