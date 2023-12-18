const express = require('express');

const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    res.cookie('name', name, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    res.send('zapisano imie');
  })
  .get('/show', (req, res) => {
    const { name } = req.cookies;
    res.send(name);
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(name ? 'imie jest zapisane' : 'imie nie zostalo jeszcze zapisane');
  });

module.exports = {
  cookieRouter,
};
