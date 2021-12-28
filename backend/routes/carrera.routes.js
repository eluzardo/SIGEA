const {Router} = require('express')
const router= Router();
const {agregarCarrera, mostrarCarrera, modificarCarrera, eliminarCarrera } = require('../controllers/carrera.controller')

router.post('/agregar-carreras', agregarCarrera)

router.get('/mostrar-carreras', mostrarCarrera)

router.post('/modificar-carreras/:id', modificarCarrera)

router.post('/eliminar-carreras/:id', eliminarCarrera)

module.exports= router;