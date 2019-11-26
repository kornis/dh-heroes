const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

const controller = 
{
    root: (req, res) => 
    {
        res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.");
    },
    creditos:(req,res)=>
    {
        res.send("Creditos para Alejandro y Fede... DH");
    }
};

module.exports = controller;