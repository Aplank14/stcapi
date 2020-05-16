//Configure express router
const Router = require('express-promise-router');
const router = new Router();

//Enable body parsing
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Import API
const api = require('./api');

// Routes
router.get('/status', api.status); // Route for getting the status
router.get('/business', api.businesses); //Get all businesses
router.get('/business/:id', api.business); //Get a specific business
router.get('/state/:id', api.cities); //Cities within a state
router.get('/city/:id', api.city); //Get a specific city

module.exports = router;
