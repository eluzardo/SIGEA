const express = require('express');
const app = express();
require('dotenv').config();



//directorio publico
app.use(express.static('public'))

//Lectura y parse de body
app.use (express.json())
app.use (express.urlencoded({extended:false})) // acepta datos que vengan de un formulario html

//Rutas
app.use('/api/materias', require('./routes/materia.routes'));
app.use('/api/carreras', require('./routes/carrera.routes'));




app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo')
});