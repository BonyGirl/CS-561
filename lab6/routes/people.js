const express = require('express');
const router = express.Router();
const data = require("../data");
const people = data.people;
const events = data.events;
const path = require('path');

// Single Person Page
router.get("/:id", (req, res) => {
    // Find a person by the provided id, 
    // then display their information
    // As well as listing all events that they will be attending
    // Each of these events need to link to the event page, and show the event name
    // If a person is not found, display the 404 error page
    return people.getPerson(req.params.id).then((person) => {
        return events.getEventsForAttendee(req.params.id).then((eventsOfAttendee)=> {
            
            res.render("layouts/person",{person:person,events:eventsOfAttendee});
            // res.render("misc/debug",{people:person,events:eventsOfAttendee});
            // return events;
        }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
        });
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    })
});

// People Index Page
router.get("/", (req, res) => {
    // Display a list of all people; it can be in an unordered list, or a table
    // Each of these people need to link to the single person page
    return people.getAllPeople().then((peopleList) => {
        res.render("layouts/people",{people:peopleList});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

module.exports = router;