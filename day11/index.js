// req { engine } from 'express-handlebars';
// eslint-disable-next-line import/no-extraneous-dependencies
const hbs = require('express-handlebars');

console.log('co to ten caly hbs', hbs);
const express = require('express');

const app = express();

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', {
    firstName: 'Uzytkownik testowy',
  });
});

app.listen(3000, 'localhost');
