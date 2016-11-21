const express = require('express');
const router = express.Router();
const data = require("../data");
const location = data.locations;
const events = data.events;
const path = require('path');

// Single Location Page
router.get("/:id", (req, res) => {
    // Find a location by the provided id, 
    // then display its information
    // As well as listing all events that will be at this location
    // Each of these events need to link to the event page and show the event name
    // If a location is not found, display the 404 error page
    return location.getLocation(req.params.id).then((lc) => {
        return events.getEventsByLocation(req.params.id).then((eventsList) => {
            // res.render("misc/debug", { debug: true, modelData: eventsList });
            res.render("layouts/singleLocation",{location:lc,events:eventsList});
        }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
});

// Location Index Page
router.get("/", (req, res) => {
    // Display a list of all locations; it can be in an unordered list, or a table
    // Each of these locations need to link to the single location page
    return location.getAllLocations().then((locationList) => {
        res.render("layouts/locations",{location:locationList});
        // res.render("misc/debug", {location: locationList });
    }).catch(() => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
    
});

module.exports = router;