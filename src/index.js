const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

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

// Route init
route(app);

app.listen(port, () => {
    console.log(`connect success`);
});