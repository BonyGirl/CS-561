const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipe;

// GET	
// /recipes/:id
// Responds with the full content of the specified recipe
router.get("/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});



router.get("/ingredients/:ingredients", (req, res) => {
    recipeData.getRecipeByIngredients(req.params.ingredients).then((postList) => {
        res.json(postList);
    });
});

router.post("/", (req, res) => {
    let recipePostData = req.body;
    console.log(recipePostData);
    recipeData.addRecipe(recipePostData.title, recipePostData.ingredients, recipePostData.steps, recipePostData.comments)
        .then((newPost) => { 
            console.log(newPost); 
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});


module.exports = router;