const db = require('../../db');

const get = {

    cities: async function(req, res) {
        const id = req.params.id;
        if(id.length!=2){
            res.status(400).send('Bad request')
        }
        try{
            const results = await db.query(`SELECT City, COUNT(City) AS Count FROM businesses WHERE OnOff=1 AND State='${id}' GROUP BY City`);
            res.status(200).send(results);
        } catch(err){
            res.status(500).send('Internal server error');
            console.log(err)    
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
