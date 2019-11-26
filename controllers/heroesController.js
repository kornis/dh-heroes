const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

const controller = 
{
    root: (req, res) => 
    {
        res.send(heroes);
    },
    
    detalle:(req,res)=>
    {
        res.send();
    },
    detalleBio: (req,res)=>
    {
        res.send();
    }
};

module.exports = controller;