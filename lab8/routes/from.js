const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    // same HTML for manual dom and jquery dom
    res.render("examples/form", {
        partial: "form-scripts"
    });
});



module.exports = router;