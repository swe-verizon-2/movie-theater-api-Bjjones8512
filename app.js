const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require('./routes/userRoutes'); // Ensure correct path to routes
const showRouter = require('./routes/showRoutes');
app.use('/users', userRouter);
app.use('/shows', showRouter);

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/movies`);
});
