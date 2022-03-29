const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Admin = new Schema({
    name: { type: String, default: "" },
    birthday: { type: Date, default: Date.now },
    idcard: { type: String, default: "" },
    phonenumber: { type: String, default: "" },
    address: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

// Admin.methods.encryptPassword = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
// };

// Admin.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// bcrypt.hash(Admin.password, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
//     console.log('hash', hash);
//     Admin.password = hash;
// });

module.exports = mongoose.model('Admin', Admin);