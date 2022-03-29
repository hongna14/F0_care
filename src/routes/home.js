const express = require('express');
const router = express.Router();

const homeControllers = require('../app/controllers/HomeController')
    //  newControllers.index

router.use('/home', homeControllers.index);

module.exports = router;