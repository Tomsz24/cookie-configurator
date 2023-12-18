const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req.headers);
  const text = req.headers['user-agent'];
  res.send(`<h1> Witaj: ${text}</h1>`);
});

app.listen(3000);
