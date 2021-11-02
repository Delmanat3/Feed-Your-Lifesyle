// https://api.edamam.com/api/recipes/v2
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
// var passport = require("./config/passport");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = 3001

const app = express()


// const axios = require('axios')
// app.use(passport.initialize());
// app.use(passport.session());


const hbs = exphbs.create({ });

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

 

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
