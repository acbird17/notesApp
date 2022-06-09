const fs = require("fs");
const path = require("path");

const newNote = (note, notesArray) => {
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 1)
  );
};

const noteId = (id, notesArray) => {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
};

const deleteNote = (note, notesArray) => {
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 1)
  );
};

module.exports = { newNote, noteId, deleteNote };
