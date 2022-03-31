const express = require('express');
const router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('../../app/models/Admin');
// const siteControllers = require('../app/controllers/SiteController');
// const { route } = require('./home');
const bcrypt = require('bcrypt');

//  newControllers.index

const saltRounds = 10;


passport.serializeUser(function(admin, done) {
    console.log(admin.email);
    done(null, admin.email);
});
// used to deserialize the user
passport.deserializeUser(function(email, done) {
    Admin.findOne({ 'email': email }, function(err, admin) {
        console.log(admin);
        done(err, admin);
    })
});
// local sign-up
passport.use('local.signup', new LocalStrategy({
    // cấu hình lại local strategy sử dụng email và password
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // cho phép chúng ta gửi reqest lại hàm callback
}, function(req, email, password, done) {
    // Kiểm tra email đã tồn tại chưa
    Admin.findOne({ 'email': email }, function(err, admin) {
        if (err) { return done(err); }
        if (admin) {
            return done(null, false, { message: 'Email is unavailable.' })
        }
        // Tạo mới nếu email sẵn dùng
        const formData = req.body;
        // res.json(req.body)
        const newAdmin = new Admin(formData);
        // lưu thông tin cho tài khoản local
        bcrypt.hash(newAdmin.password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            console.log('hash', hash);
            newAdmin.password = hash;
            newAdmin.save()
                // .then(() => res.redirect('/'))
                .then(() => { return done(null, newAdmin) })
                .catch(e => {
                    return done(e)
                });
        });
        // lưu user
    });
}));

// local login
passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    const formData = req.body;
    console.log(formData);
    Admin.findOne({ 'email': email })
        .then(async function(admin) {
            if (!admin) return done(null, false, { message: 'Not admin found' });
            else {
                const isValid = await bcrypt.compare(
                    formData.password,
                    admin.password
                );
                if (isValid) return done(null, admin);
                else return done(null, false, { message: 'Wrong password' });
            }
        })
        .catch(function(err) {
            return done(err);
        });
}));


module.exports = passport;