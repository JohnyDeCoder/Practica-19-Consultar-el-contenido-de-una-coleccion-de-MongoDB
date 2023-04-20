const express = require('express'); // inyectamos express
const router = express.Router(); // creamos un router de express
const mongoose = require('mongoose'); // inyectamos mongoose

const Person = require('../models/persons'); // inyectamos el modelo de persons

router.get('/gente', async (req, res) => { // creamos una ruta para obtener todas las personas
    const Persons = await Person.find(); // obtenemos todas las personas de la base de datos y las guardamos en una constante llamada Persons (await es para hacer async/await)
    res.json(Persons); // respondemos con un json con todas las personas de la base de datos (esto es para que el front-end pueda consumirlo)
});

module.exports = router; // exportamos el router para poder usarlo en otros archivos