//required
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');

// var cloudinary = require('cloudinary');
const app = express();
const PORT = process.env.PORT || 3001;

//handlebars templates
const hbs = exphbs.create({
  helpers,
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//sequilze
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//express templates
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, '/public/')));
// app.use(express.static(path.join(__dirname, '/images/')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize
  .sync({
    force: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
