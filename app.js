const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require('./routes/usersRoutes'); // Ensure correct path to routes
const showRouter = require('./routes/showsRoutes');
app.use('/users', userRouter);
app.use('/shows', showRouter);

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
