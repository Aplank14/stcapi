const db = require('../../db');

const get = {

    cities: async function(req, res) {
        try{
            const results = await db.query('SELECT DISTINCT City FROM businesses');
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
