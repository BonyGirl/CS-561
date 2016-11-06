const manipulatorRoutes = require("./manipulator");

const constructorMethod = (app) => {
    app.use("/manipulator", manipulatorRoutes);

    app.use("*", (req, res) => {
        res.redirect("/manipulator/static");
    })
};

module.exports = constructorMethod;