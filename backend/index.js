const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Middlewares
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//directorio publico
app.use(express.static('public'));

//Lectura y parse de body
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // acepta datos que vengan de un formulario html

//Rutas
app.use('/api/materias', require('./routes/materia.routes'));
app.use('/api/carreras', require('./routes/carrera.routes'));
app.use('/api/plan-estudio', require('./routes/planEstudio.routes'));

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo');
});
