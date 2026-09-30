// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// JSON parse karne ke liye middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});