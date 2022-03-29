const Admin = require('../models/Admin');
const { mongooseToObject } = require('../../util/mongoose');
const { send } = require('express/lib/response');
const bcrypt = require('bcrypt');

const saltRounds = 10;


class SiteController {

    // GET /
    index(req, res, next) {

        res.render('home');
    }


    // GET/login
    loginPage(req, res, next) {

        res.render('login');
    }

    //POST/login
    login(req, res, next) {
        const formData = req.body;
        // res.json(req.body)
        const admin = new Admin(formData);
        bcrypt.hash(admin.password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            console.log('hash', hash);
            admin.password = hash;
            admin.save()
                // .then(() => res.redirect('/'))
                .then(() => res.json(admin))
                .catch(e => {

                });
        });
    }

}

module.exports = new SiteController;