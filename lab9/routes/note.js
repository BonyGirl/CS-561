const express = require('express');
const router = express.Router();
const data = require("../data");
// const event = data.events;
// const location = data.locations
// const people = data.people
const notes = data.notes;
const path = require('path');

// page 1:/
router.get("/", (req, res) => {
    return notes.getALlNotes().then((notes)=>{
        // res.render("misc/debug", {notes:notes});
        res.render("layouts/notes",{notes:notes});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

// page 2:/note
router.get("/:id", (req, res) => {
    return notes.getNote(req.params.id).then((note)=>{
        if(!note){
            let route = path.resolve(`static/404.html`);
            res.sendFile(route);
        }
        else {
            // res.render("misc/debug",{note:note});
        res.render("layouts/singleNote",{note:note});
            
        }
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});




module.exports = router;