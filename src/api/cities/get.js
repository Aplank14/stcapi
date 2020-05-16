const db = require('../../db');

const get = {

    cities: async function(req, res) {
        try{
            const results = await db.query('SELECT DISTINCT City FROM businesses WHERE OnOff=1');
            res.status(200).send(results);
        } catch{
            res.status(500).send('Internal server error');    
        }
    },

    citiesCount: async function(req, res) {
        try{
            const results = await db.query('SELECT City, COUNT(City) FROM businesses WHERE OnOff=1 GROUP BY City');
            res.status(200).send(results);
        } catch{
            res.status(500).send('Internal server error');    
        }
    },

    
    city: async function(req, res) {
        const id = req.params.id;
        // ARG Checking
        try{
            const results = await db.query(`SELECT * FROM businesses WHERE City=${id}`);
            res.status(200).send(results);    
        } catch{
            res.status(500).send('Internal server error');    
        }
    }
    
}

module.exports = get
