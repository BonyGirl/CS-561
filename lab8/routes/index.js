const localStorageRoutes = require("./localstorage");

const constructorMethod = (app) => {
    app.use("/localstorage", localStorageRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;