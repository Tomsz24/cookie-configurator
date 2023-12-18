const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(express.json());
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 10,
  }),
);

app.get('/', (req, res) => {
  res.send('Siemanko frajerzy witam na moim beznadziejnym serverze :D');
});

app.listen(3000, 'localhost');
