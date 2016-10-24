const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.recipe;
const recipe = require("./recipe");
const uuid = require('node-uuid');



let exportedMethods = {
    getCommentByRecipeId(recipeId){
        return comments().then((commentsCollection) => {
            return commentsCollection.findOne({_id:recipeId}).then((recipe) => {
                return recipe.comments;
            });
        });
    },
    getCommentById(commentId) {
        return comments().then((commentsCollection) => {
            return commentsCollection.findOne({ "comments._id": commentId}).then((recipe)=> {
                if(!recipe){
                    throw "Comment not found";
                }
                for (a in recipe.comments){
                    if(recipe.comments[a]._id == commentId) {
                        return recipe.comments[a];
                    }
                }
            });
        });
    },
    addComment(poster,comment,recipeId) {
        return comments().then((commentsCollection) => {
            let newComment = {
                _id:uuid.v4(),
                poster:poster,
                comment:comment
            };
            return commentsCollection.update({_id:recipeId},{ $addToSet: { "comments": newComment }}).then((result) => {
                return recipe.getRecipeById(recipeId);
            });
        });
    },
    updateComment(commentId,comment) {
        return comments().then((commentsCollection) => {
            return commentsCollection.update({"comments._id":commentId},{$set:{"comments.0":comment} });
        });
    },
    removeComment(commentId) {
        return comments().then((commentsCollection) => {
            exportedMethods.getCommentById(commentId).then((comment) =>{
                return commentsCollection.update({"comments._id":commentId},{$pull:{"comments":comment} });
            });
        });
    }
}

module.exports = exportedMethods;