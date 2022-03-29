const homeRouter = require('./home');
const siteRouter = require('./site')

function route(app) {
    // app.use('/', homeRouter);
    app.use('/', siteRouter);
}

module.exports = route;