// Require de Express
const express = require('express');
// Require de rutas
const rutasHeroes = require('./routes/heroes');
const rutasMain = require('./routes/main');
// Require de FS


// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json


// Ruta Raíz / ➝ Home
app.use('/',rutasMain);

// Ruta /heroes
app.use('/heroes',rutasHeroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado




// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});