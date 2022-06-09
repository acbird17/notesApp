const fs = require("fs");
const path = require("path");

const newNote = (note, noteList) => {
  noteList.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: noteList }, null, 1)
  );
};

const noteId = (id, noteList) => {
  const result = noteList.filter((note) => note.id === id)[0];
  return result;
};

const deleteNote = (note, noteList) => {
  const index = noteList.indexOf(note);
  noteList.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteList }, null, 1)
  );
};
