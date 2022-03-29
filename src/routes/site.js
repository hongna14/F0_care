const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');
const { route } = require('./home');
//  newControllers.index


// login handle
router.get('/login', siteControllers.loginPage);
router.post('/login', siteControllers.login);



router.get('/', siteControllers.index);

module.exports = router;