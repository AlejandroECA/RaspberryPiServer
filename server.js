const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', cors(), (req, res) => {
  res.json(console.log('hi from server'););
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);