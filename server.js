// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/test', (req, res) => {
  res.send('Test Hello');
});

module.exports = app;
