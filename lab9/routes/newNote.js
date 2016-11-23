const express = require('express');
const router = express.Router();
const data = require("../data");
const xss = require('xss');
const notes = data.notes;
const path = require('path');


router.post("/newNote", (req, res) => {
    var title = xss(req.body.title),
        dueDate = xss(req.body.dueDate),
        summary = xss(req.body.summary),
        body = xss(req.body.body);

    return notes.createNote(req.body.title,req.body.dueDate,req.body.summary,req.body.body).then((noteId)=>{
        // res.render("misc/debug", {notes:notes});
        res.render("layouts/singleNote",{id:noteId});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});


// page 3:/new
router.get("/", (req, res) => {
    res.render("layouts/newNote");
});


module.exports = router;