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
    getCommentById(recipeId,commentId) {
        return comments().then((commentsCollection) => {
            return commentsCollection.findOne({_id:recipeId}).then((comment)=> {
                if(!comment){
                    throw "Comment not found";
                }
                return comment;
            });
        });
    },
    addComment(poster,comment,recipeId) {
        return comments().then((recipeCollection) => {
            let newComment = {
                _id:uuid.v4(),
                poster:poster,
                comment:comment
            };
            return recipeCollection.update({_id:recipeId},{ $addToSet: { "comments": newComment }}).then((result) => {
                return recipe.getRecipeById(recipeId);
            });
        });
    },
    updateComment(commentId,comment) {

    },
    removeComment(commentId) {
        return comments().then((recipeCollection) => {
            return recipeCollection.update({$pull:{ "comments":{_id:commentId}} }).then(function() {
                    return exports.getMovie(id);
                });
             });
    }
}

module.exports = exportedMethods;