// const express = require('express');
// const cors =  require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/users');


// const router = express.Router();


// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({email});

//         if(!user){
//             return res.status(401).json({ error: 'Email inválido'});
//         }
//         const passwordValid = await bcrypt.compare(password, user.password); 

//         if(!passwordValid) {
//             return res.status(401).json({ error: "Contraseña incorrecta"});
//         }

//         const token = jwt.sign({ userId: user._id }, "token");
//         res.json ({token})
//     } catch (error) {
//         res.status(500).json({error: "Error en el servidor"});
//     }
// });