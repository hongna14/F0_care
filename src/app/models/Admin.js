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

module.exports = mongoose.model('Admin', Admin);