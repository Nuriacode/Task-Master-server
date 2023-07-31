//crear y configurar el sercidor
const express= require('express');
const cors =  require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const authRoutes = require('../routes/auth');

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

// app.use('/login', authRoutes);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({ error: 'Email inválido'});
        }
        const passwordValid = bcrypt.compare(password, user.password); 

        if(!passwordValid) {
            return res.status(401).json({ error: "Contraseña incorrecta"});
        }
        const token = jwt.sign({ userId: user._id }, "token");
        res.json ({token})
    } catch (error) {
        res.status(500).json({error: "Error en el servidor"});
    }
});