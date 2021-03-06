const path = require('path');
const loginRoutes = require('./login');

const constructorMethod = (app) => {

    // app.use("/private",privateRoutes);
    app.use("/", loginRoutes);
    
    app.use("*",(req,res) => {
        res.redirect('/');
    });
};

module.exports = constructorMethod;