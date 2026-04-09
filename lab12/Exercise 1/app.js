const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the RESTful API for Managing Users!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
