// const peopleRoutes = require("./people");
// const eventRoutes = require("./events");
// const locationRoutes = require("./locations");

const noteRoutes = require("./note");
const newNoteRoutes = require("./newNote");

const path = require('path');

const constructorMethod = (app) => {
    // app.use("/people", peopleRoutes);
    // app.use("/events", eventRoutes);
    // app.use("/locations", locationRoutes);
    
    app.use("/404",(req,res) => {
        let route = path.resolve(`static/404.html`);
        res.sendFile(route);
    });
    
    app.use("/", noteRoutes);
    // app.use("/new", newNoteRoutes);
};

module.exports = constructorMethod;