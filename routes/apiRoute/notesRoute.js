const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { route } = require(".");
const { notes } = require("../../db/db");
const { newNote, noteId, deleteNote } = require("../../lib/notes");

router.get("/api/notes", (req, res) => {
  res.json(notes);
});

router.post("/api/notes", (req, res) => {
  if (!req.body.id) {
    req.body.id = uuidv4();
    newNote(req.body, notes);
  }

  res.json(req.body);
});

router.delete("/notes/:id", (req, res) => {
  const note = noteId(req.params.id, notes);
  deleteNote(note, notes);
  res.json();
});

module.exports = router;
