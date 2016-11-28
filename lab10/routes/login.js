const express = require('express');
const router = express.Router();
const data = require("../data");
const xss = require('xss');
const User = data.users;
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    let user = User.findOne(username);
    console.log(user);
    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      else {
          if (!(user.password == password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
      }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get("/", (req, res) => {
    res.render("layouts/login");
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/private',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

// router.post("/login", (req, res) => {
//     console.log(req.body);
//     // res.render("layouts/login");
// });

module.exports = router;