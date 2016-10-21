const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipe;


router.get("/", (req, res) => {
    recipeData.getAllrecipe().then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});

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

router.post("/", (req, res) => {
    let recipePostData = req.body;
    recipeData.addRecipe(recipePostData.title, recipePostData.ingredients, recipePostData.steps, recipePostData.comments)
        .then((newPost) => { 
            console.log(newPost); 
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});

router.put("/:id",(req,res) => {
    let updatedData = req.body;
    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() =>{
        return recipeData.updateRecipe(req.params.id,updatedData)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }).catch((e) => {
                res.status(500).json({error:e});
            });
    }).catch(() => {
        res.status(404).json({error:"Recipe not found"})
    });

});

router.delete("/:id", (req, res) => {
    let getRecipe = recipeData.getRecipeById(req.params.id);
    getRecipe.then(() => {
        return recipeData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({error:e});
            });
    }).catch(()=> {
        res.status(404).json({ error: "Recipe not found" });
    });
});





module.exports = router;