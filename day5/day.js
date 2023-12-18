const express = require('express');
const { writeFile, readFile } = require('fs').promises;

const app = express();

// app.get('/:firstArg/:secondArg', (req, res) => {
//   const { firstArg = '0', secondArg = '0' } = req.params;
//   console.log(req.params);
//   res.send(`Wynik tego dodawania to: ${Number(firstArg) + Number(secondArg)}`);
// });

app.get('/name/set/:arg', async (req, res) => {
  const nameFromPath = req.params.arg;
  await writeFile('name.txt', nameFromPath, 'utf-8');
  res.send(`Witaj ${nameFromPath}`);
});

app.get('/name/show', async (req, res) => {
  const name = await readFile('name.txt', 'utf-8');
  res.send(`Witaj ${name}`);
});

app.get('/name/check', async (req, res) => {
  try {
    await readFile('name.txt');
    res.send('Imie jest zapisane');
  } catch (e) {
    res.send('Nie ma jesszcze zadnego imienia');
  }
});

app.listen(3000);
