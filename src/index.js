const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const route = require('./routes');
const db = require('./config/db');

app.use(bodyParser.json());

//Connect DB
db.connect();


app.use(express.static(path.join(__dirname, 'public'))); //static file

app.use(morgan('combined'));

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));


app.use(session({
    secret: 'chau',
    resave: false,
    saveUninitialized: false,
}))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session());
// Route init
route(app);

app.listen(port, () => {
    console.log(`connect success`);
});