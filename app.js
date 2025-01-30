const express = require('express');
const app = express();
//const port = 3001;

require('dotenv').config();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World from vercel!!!!!!!!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});