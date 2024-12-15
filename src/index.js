const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'CI/CD Pipeline',
    message: 'Welcome to the CI/CD Demo Application!'
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
