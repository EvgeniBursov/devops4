// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

// eslint-disable-next-line import/no-extraneous-dependencies, import/newline-after-import
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log('Server Started');
});
