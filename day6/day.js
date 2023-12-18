const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cookieParser = require('cookie-parser');

const app = express();
// DO ODCZYTYWANIA PLIKI TYPU JSON KTORE ODBIERAMY
app.use(express.json());

// DO WRZUCANAI NP CALEGO FRONTENDU LIB POJEDYNCZYCH PLIKOW STATYCZNCYCH
// app.use(express.static('public'));

app.use(cookieParser());

app.post('/book', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Ok');
});

app.listen(3000);
