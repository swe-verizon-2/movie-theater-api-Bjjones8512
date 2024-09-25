const express = require('express');
const { Show, User } = require('../models'); // Correct import of models
const { body } = require('express-validator');
const router = express.Router();

// GET all shows
router.get('/', async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

// GET one show by ID
router.get('/:id', async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  if (show) {
    res.json(show);
  } else {
    res.status(404).send('Show not found');
  }
});

// GET all users who watched a show
router.get('/:id/users', async (req, res) => {
  const show = await Show.findByPk(req.params.id, {
    include: User
  });
  if (show) {
    res.json(show.Users);
  } else {
    res.status(404).send('Show not found');
  }
});

// PUT update the available property of a show
router.put('/:id', [
  body('available').isBoolean() // Validation for boolean values
], async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  if (show) {
    show.available = req.body.available;
    await show.save();
    res.json(show);
  } else {
    res.status(404).send('Show not found');
  }
});

// DELETE a show
router.delete('/:id', async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  if (show) {
    await show.destroy();
    res.send('Show deleted');
  } else {
    res.status(404).send('Show not found');
  }
});

// GET shows by genre
router.get('/genre', async (req, res) => {
  const shows = await Show.findAll({
    where: { genre: req.query.genre }
  });
  res.json(shows);
});

module.exports = router;