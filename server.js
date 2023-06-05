// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

// Serve static files from the 'public' directory
app.get('/', (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/test', (req, res) => {
  res.send('Test Hello');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
