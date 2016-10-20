const postRoutes = require("./comments");
const userRoutes = require("./recipe");

let constructorMethod = (app) => {
    app.use("/comments", postRoutes);
    app.use("/recipe", userRoutes);
};

module.exports = {
    users: require("./comments"),
    posts: require("./recipe")
};