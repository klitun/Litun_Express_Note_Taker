const fs = require('fs');
const app = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { writeToFile, readFromFile } = require('../helpers/fsUtils');


//Loads saved notes
app.get('/notes', function (_req, res) {
  readFromFile('./db/db.json', "utf-8").then(results => res.json(JSON.parse(results)));
});

//Adds new notes
app.post('/notes', function (req, res) {
  const { title, text, id } = req.body;
  readFromFile('./db/db.json', "utf-8").then(results => {
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
      const notes = JSON.parse(results);
      notes.push(newNote)
      writeToFile('./db/db.json', notes);
      res.json(newNote);
    } else {
      res.error('Error');
    }
  })
}
);

//Deletes selected notes
app.delete('/notes/:id', function (req, res) {

  const { id } = req.params


  readFromFile('./db/db.json', "utf-8").then(results => {
    const notes = JSON.parse(results);
    const updateNotes = notes.filter(note => note.id !== id);
    writeToFile('./db/db.json', updateNotes);
    res.status(200).end();
  })
});

module.exports = app;