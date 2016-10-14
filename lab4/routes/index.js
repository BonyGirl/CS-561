"use strict"

const eduRoutes = require("./education");
const hobRoutes = require("./hobby");
const _classRoutes = require("./_class");

const constructorMethod = (app) => {
    app.use("/education", eduRoutes);
    app.use("/hobbies", hobRoutes);
    app.use("/classes", _classRoutes);

    app.use("*", (req, res) => {
        //console.log(typeof req.query.code);
        console.log(req.query);
        res.status(404).json({error: "Not found"});
    
        app.use(function(err, req, res, next) {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });

    });
};

module.exports = constructorMethod;