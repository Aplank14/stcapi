const db = require('../../db');

const get = {

    status: async function(req, res) {
        res.status(200).send('Hello world!');
    },

    businesses: async function(req, res) {
        try{
            const results = await db.query('SELECT * FROM businesses');
            res.status(200).send(results); 
        } catch{
            res.status(500).send('Internal server error');    
        }
    },
    
    business: async function(req, res) {
        const id = req.params.id;
        if(isNaN(id)){
            res.status(400).send({body: 'ID must be an int.'})
            return;
        }
        try{
            const results = await db.query(`SELECT * FROM businesses WHERE id==${id}`);
            res.status(200).send(results);    
        } catch{
            res.status(500).send('Internal server error');    
        }
    },

};

module.exports = get;