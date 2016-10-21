const commentsRoutes = require("./comments");
const recipeRoutes = require("./recipe");

let constructorMethod = (app) => {
    app.use("/comments", postRoutes);
    app.use("/recipe", userRoutes);
};

module.exports = {
    comments: require("./comments"),
    recipe: require("./recipe")
};