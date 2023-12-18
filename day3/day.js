const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi !');
});

app.get('/article/:id/:articleName?', (req, res) => {
  console.log(req.params);
  res.send({
    id: req.params.id,
    content: 'Sialalala',
  });
});

app.listen(3000);
