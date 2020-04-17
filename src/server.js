//Load dotenv environment variables
require('dotenv').config();

//Initialize express application
const express = require('express');
const app = express();

//Enable CORS
const cors = require('cors');
app.use(cors());

//Link router
const router = require('./routes');
app.use('/', router);

//Run API
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`API serving on port ${port}`);
});

app.server = server;

module.exports = app;
