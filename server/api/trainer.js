const router = require("express").Router();
const { Trainer, Pokemon } = require("../db/index");

/* Some routes have already been completed. Write a route for:
  - Adding a badge to a trainer by id
*/

router.get("/", async (req, res, next) => {
  try {
    const allTrainers = await Trainer.findAll();
    res.send(allTrainers);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const trainer = await Trainer.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Pokemon }]
    });
    res.send(trainer);
  } catch (err) {
    next(err);
  }
});

// INSERT HERE

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newTrainer = await Trainer.create({
      name
    });
    res.send(newTrainer);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Trainer.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
