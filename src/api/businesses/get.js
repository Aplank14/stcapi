const db = require('../../db');

const get = {

    status: async function(req, res) {
        const results = await db.query('SELECT * FROM businesses');
        res.status(200).send(results);
    },
    hello: async function(req, res) {
        res.status(200).send('hello world');
    },
    
      

    Cities: async function(req, res) {
        const results = await db.query('SELECT DISTINCT City FROM businesses');
        res.status(200).send(results);
    },



};

module.exports = get;