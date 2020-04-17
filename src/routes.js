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
router.get('/business', api.businesses); //says hello world
router.get('/business/:id', api.business); //says hello world
router.get('/city', api.cities); //Cities
router.get('/city/:id', api.city); //Cities

module.exports = router;
