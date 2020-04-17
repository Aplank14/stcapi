// API controller index.js
const businesses = require('./businesses/get');
const cities = require('./cities/get');

const api = {
  ...businesses,
  ...cities
};

module.exports = api;
