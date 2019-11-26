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
        if(req.params.ok){
            if(req.params.id > heroes.length){
                var detalleBio = 'No encontramos un héroe :(';
            } else {
                var detalleBio = '<h1>'+heroes[req.params.id - 1].nombre + '</h1><br><br>';
                detalleBio += heroes[req.params.id - 1].resenia;
            }
        } else {
            var detalleBio = req.params.id > heroes.length ? 'No encontramos un héroe :(' : heroes[req.params.id - 1].nombre+' Lamento que no desees saber más de mi';
        }
        res.send(detalleBio);
    }
};

module.exports = controller;