const express = require('express');

const app = express();

app.get('/', () => {
  console.log('Witaj swiecie')
});

app.get('/hello', () => {
  console.log('siemanko mordko :D')
})

app.listen(3000);
