const formRoutes = require("./from");

const constructorMethod = (app) => {
    app.use("/from", formRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;