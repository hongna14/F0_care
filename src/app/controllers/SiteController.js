const Admin = require('../models/Admin');
const { mongooseToObject } = require('../../util/mongoose');
const { send } = require('express/lib/response');
const bcrypt = require('bcrypt');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// passport session setup
// used to serialize the user for the session
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });


const saltRounds = 10;


class SiteController {

    // GET /
    index(req, res, next) {

        res.render('home');
    }


    // GET/signup
    signupPage(req, res, next) {

        res.render('signup');
    }

    //POST/signup
    signup(req, res, next) {

    }

    loginPage(req, res, next) {
        res.render('login');
    }

    login(req, res, next) {
        Admin.find({})
            .then(function(admins) {

            })
            .catch(next);
    }

}

module.exports = new SiteController;