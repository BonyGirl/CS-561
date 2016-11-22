const express = require('express');
const router = express.Router();
const data = require("../data");
const event = data.events;
const location = data.locations
const people = data.people
const path = require('path');


// Single Event Page
router.get("/:id", (req, res) => {
    return event.getEvent(req.params.id).then((event)=>{
        return people.getPersonList(event.attendees).then((attendees) => {
            return location.getLocation(event.location).then((lc) => {
                res.render("layouts/singleEvent",{event:event,attendees:attendees,location:lc});
            });
        });
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

// Event Index Page
router.get("/", (req, res) => {
    return event.getAllEvents().then((events)=>{
        // res.render("misc/debug", { debug: true, modelData: event });
        res.render("layouts/events",{events:events});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

module.exports = router;