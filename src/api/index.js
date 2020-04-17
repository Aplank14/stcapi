// API controller index.js
const businesses = require('./businesses/get');

const api = {
  ...businesses,
};

module.exports = api;
