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

        let heroe = heroes.filter(h => h.id == req.params.id).pop();
        console.log(typeof heroe);
        if (heroe == undefined)
        {
            res.send("Heroe no encontrado");
        }
        else{
            let detalle = "Hola, mi nombre es: " + heroe.nombre + "y soy: "+ heroe.profesion;
            res.send(detalle);
        }

    },
    detalleBio: (req,res)=>
    {
        res.send();
    }
};

module.exports = controller;