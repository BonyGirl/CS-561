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
    currentNote++;
    if(currentNote>allNotes.length) {
        currentNote=0;
    }
    res.send(allNotes[currentNote]);
    // return notes.getNote(req.params.id).then((note)=>{
    //     if(!note){
    //         let route = path.resolve(`static/404.html`);
    //         res.sendFile(route);
    //     }
    //     else {
    //         console.log(request.body);
    //         response.send("<div>" + xss(request.body.description) + "</div>");
            
    //     }
    // }).catch(() => {
    //     let route = path.resolve(`static/404.html`);
    //     res.sendFile(route);
    // });
});

// page 2:/note
router.get("/", (req, res) => {
    return notes.getALlNotes().then((notes)=>{
        // res.render("misc/debug", {notes:notes});
        allNotes = notes;
        res.render("layouts/singleNote",{note:notes[currentNote]});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});






module.exports = router;