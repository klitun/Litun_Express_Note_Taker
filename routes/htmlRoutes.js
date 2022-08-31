const path = require('path');
const app = require('express').Router();


// GET Route for homepage
app.get('/', (_req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes page
app.get('/notes', (_req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//Get Route for * request
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
  
  module.exports = app;