const express = require('express');
const { User, Show } = require('../app');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET one user by ID
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// GET all shows watched by a user
router.get('/:id/shows', async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: Show
  });
  if (user) {
    res.json(user.Shows);
  } else {
    res.status(404).send('User not found');
  }
});

// PUT associate a user with a show they watched
router.put('/:userId/shows/:showId', async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  const show = await Show.findByPk(req.params.showId);
  if (user && show) {
    await user.addShow(show);
    res.send('Show added to user');
  } else {
    res.status(404).send('User or show not found');
  }
});

module.exports = router;