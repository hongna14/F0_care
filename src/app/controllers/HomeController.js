const Admin = require('../models/Admin');

class HomeController {

    // GET /home
    index(req, res, next) {
        Admin.find({})
            .then(function(admins) {
                if (admins._id == req.body._id) res.send('sucess');
                else res.send('error');
            })
            .catch(next);

        //res.render('home');
    }

}

module.exports = new HomeController;