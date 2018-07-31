const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let page = fs.readFileSync('index.html', 'utf8');

app.use(bodyParser.text());

app.get('/', (req, res) => res.send(page));

app.post('/', (req, res) => {
  page = req.body;
  res.end();
});

app.listen(3000, () => console.log('Polymorph app listening on port 3000!'));
