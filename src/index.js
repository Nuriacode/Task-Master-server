//crear y configurar el sercidor
const express= require('express');
const cors =  require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json({limit:'25mb'}));

const port = process.env.PORT || 4000;

//conectar al archivo de conexión
const mongoose = require('mongoose');
const dbConnect = require('../config/connection')
dbConnect();

const User = require('../models/users');

app.listen(port, ()=>{
    console.log('servidor a su servicio en el puerto', port);
});

app.get('/allUsers', async (req, res) =>{
    try{
        const allUsers = await User.find();
        res.json(allUsers)
    } catch (error) {
        console.error('Error al obtener usuarios', error);
        res.status(500).json({ error: 'Error al obtener usuarios'});
    }
});

// app.post('/login', (req, res) => {
//     { email, password } = req.body;

//     const user = users.find((u) => u.email === email)
// })
