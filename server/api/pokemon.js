const router = require('express').Router();
const { Pokemon } = require('../db/index');

/* Write a route for..
-Listing all the pokemon
-listing a pokemon by Id
  -include control flow for error handling
-creating a pokemon
-updating a pokemon in real time

if we have time:
-delete a pokemon slice

*/

router.get('/', async (req, res, next) => {
  try {
    const allPoke = await Pokemon.findAll();
    res.send(allPoke);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      res.sendStatus(404);
    } else {
      res.json(pokemon);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPoke = await Pokemon.create({
      name: req.body.name,
      description: req.body.description,
      element: req.body.element
    });
    res.send(newPoke);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [, pokemonToUpdate] = await Pokemon.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.json(pokemonToUpdate[0]);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedPokemon = await Pokemon.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
