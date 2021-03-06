const express = require('express');
const router = express.Router();
const data = require("../data");
const event = data.events;
const location = data.locations
const people = data.people
const path = require('path');


// Single Event Page
router.get("/:id", (req, res) => {
    // Find a event by the provided id, 
    // then display its information
    // As well as listing the names of all the attendees that will be at this event 
    // Each of these attendee names will need to link to their person page
    // You will also list the location of the event, said location's name, and a link to the location page

    // If a event is not found, display the 404 error page
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
    // Display a list of all events; it can be in an unordered list, or a table
    // Each of these events need to link to the single event page
    return event.getAllEvents().then((events)=>{
        // res.render("misc/debug", { debug: true, modelData: event });
        res.render("layouts/events",{events:events});
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

module.exports = router;