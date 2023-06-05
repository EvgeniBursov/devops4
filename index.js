// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

// eslint-disable-next-line import/no-extraneous-dependencies, import/newline-after-import
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

const app = require('./server');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
