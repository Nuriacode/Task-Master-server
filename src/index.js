//crear y configurar el sercidor
const express= require('express');
const cors =  require('cors');

const app = express();

app.use(cors());
app.use(express.json({limit:'25mb'}));

const port = process.env.PORT || 4000;

//conectar al archivo de conexión
// const dbConnect = require('../config/connection)

app.listen(port, ()=>{
    console.log('servidor a su servicio en el puerto', port);
});

