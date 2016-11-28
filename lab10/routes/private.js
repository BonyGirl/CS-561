const express = require('express');
const router = express.Router();
const data = require("../data");
const xss = require('xss');
const User = data.users;
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




router.get("*", (req, res) => {
    // console.log(req.user);
    if(!req.user){
        res.redirect('http://localhost:3000');
    }
    res.render("layouts/private",req.user);
});




module.exports = router;