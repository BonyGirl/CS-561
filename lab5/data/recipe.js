const mongoCollections = require("../config/mongoCollections");
const recipe = mongoCollections.recipe;
const comments = require("./comments");
const uuid = require('node-uuid');


let exportedMethods = {
    getRecipeByIngredients() {

    },
    getAllrecipe() {
        return recipe().then((recipeCollection) => {
            return recipeCollection.find({}).toArray();
        });
    },
    getRecipeById(id) {
        return recipe().then((recipeCollection)=>{
            return recipeCollection.findOne({_id:id}).then((recipe)=>{
                if(!post) throw "Post not found";
                return post;
            });
        });
    },
    addRecipe(title,ingredients,steps,comments) {
        return recipe().then((recipeCollection) => {
            let newRecipe = {
                        title: title,
                        ingredients: ingredients,
                        steps:steps,
                        comments: comments,
                        _id: uuid.v4()
                    };
            return recipeCollection.insertOne(newRecipe).then((newInsertInformation)=>{
                return newInsertInformation.insertedId;
            }).then((newId)=>{
                return this.getRecipeById(newId);
            });
        });
    },
    removeRecipe(id) {
        return recipe().then((recipeCollection)=>{
            return recipeCollection.removeOne({_id: id}).then((deletetionInfo) => {
                if(deletetionInfo.deletedCount === 0) {
                    throw (`Could not delete recipe with id of ${id}`)
                }
            });
        });
    },
    updateRecipe(id,updatedRecipe) {
        return recipe().then((recipeCollection) => {
            let updateRecipeData = {};

            if (updatedRecipe.title) {
                updateRecipeData.title = updatedRecipe.title;
            }

            // if (updatedRecipe.ingredients) {
            //     updateRecipeData.ingredients = updatedRecipe.ingredients;
            // }

            // if (updatedRecipe.steps) {
            //     updateRecipeData.steps = updatedRecipe.steps;
            // }

            // if (updatedRecipe.comments) {
            //     updateRecipeData.comments = updatedRecipe.comments;
            // }

            let updateCommand = {
                    $set: updateRecipeData
            };

            return recipeCollection.updateOne({_id:id},updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
    renameIngredients(oldIngredients, newIngredients) {
        let findDocuments = {
            tags: oldIngredients
        };

        let firstUpdate = {
            $pull: oldIngredients
        };

        let secondUpdate = {
            $addToSet: newIngredients
        };

        return recipeCollection.updateMany(findDocuments, firstUpdate).then((result) => {
            return recipeCollection.updateMany(findDocuments, secondUpdate);
        }).then((secondUpdate) => {
            return this.getRecipeByIngredients(newIngredients);
        });
    }
}

module.exports = exportedMethods;