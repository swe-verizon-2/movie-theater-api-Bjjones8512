const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const userRouter = require('./routes/usersRoutes');
const showRouter = require('./routes/showsRoutes');
app.use('/users', userRouter);
app.use('/shows', showRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
