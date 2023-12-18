const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  // res.sendFile(join(__dirname, 'pic.JPG'));
  // res.sendFile('pic.JPG', {
  //   root: join(__dirname, 'files'),
  // });
  // res.attachment('pic.JPG', {
  //   root: join(__dirname, 'files'),
  // });
  // res.attachment(join(__dirname, 'pic.JPG'));
  // res.end();
  // res.set('X-Mega-Tomii', 'tomii-rules');
  res.cookie('ciastko', 'czekoladowe');
  res.cookie('drugie ciastko', 'dieta nie dla nas', {
    path: '/',
    // domain: 'xyz.mydomain.com',
    // expires: new Date(2023, 11, 31),
    maxAge: 100 * 60 * 60 * 24 * 365,
  });
  res.send('siemanko');
  res.end();
});
app.listen(3000);
