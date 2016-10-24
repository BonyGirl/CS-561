const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;

// /recipe/:recipeId
router.get("/recipe/:recipeId", (req, res) => {
    commentsData.getCommentByRecipeId(req.params.recipeId).then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "recipe not found" });
    });
});


router.get("/:commentId", (req, res) => {
    commentsData.getCommentById(req.params.commentId).then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "comment not found" });
    });
});

router.post("/:recipeId", (req, res) => {
    let commentData = req.body;
    commentsData.addComment(commentData.poster, commentData.comment, req.params.recipeId)
        .then((newPost) => {
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});

router.put("/:recipeId/:commentId", (req, res) => {
    let updatedData = req.body;

    let getComment = commentsData.getCommentById(req.params.commentId);

    getComment.then(() => {
        return commentsData.updateComment(req.params.commentId, updatedData)
            .then((updatedPost) => {
                res.json(updatedPost);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "comment not found" });
    });

});

router.delete("/:id", (req, res) => {

    return commentsData.removeComment(req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });

});

module.exports = router;