const mongoose = require('mongoose');
async function connect() { // awwait
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/F0care_prod');
        console.log('connect success ');
    } catch (error) {
        console.log('connect error');
    }


}

module.exports = { connect };