const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded())

// Routes
const userRouter = require('./routes/users');
const showRouter = require('./routes/shows');
app.use('/users', userRouter);
app.use('/shows', showRouter);

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/movies`);
})
