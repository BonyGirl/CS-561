const express = require('express');
const router = express.Router();
const data = require("../data");
const xss = require('xss');
// const event = data.events;
// const location = data.locations
// const people = data.people
const notes = data.notes;
const path = require('path');

var allNotes = [];
var currentNote = 0;

router.post("/next", (req, res) => {
    return notes.getALlNotes().then((notes)=>{
        // res.render("misc/debug", {notes:notes});
        allNotes = notes;
        currentNote++;
    if(currentNote>allNotes.length) {
        currentNote=0;
    }
    res.send(allNotes[currentNote]);
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
    
});

// page 2:/note
router.get("/", (req, res) => {
    return notes.getALlNotes().then((notes)=>{
        // res.render("misc/debug", {notes:notes});
        allNotes = notes;
        currentNote = allNotes.length-2;
        res.render("layouts/singleNote",{note:notes[currentNote]});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

module.exports = router;