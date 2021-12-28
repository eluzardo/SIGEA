const {Router} = require('express')
const router= Router();
const {agregarPlanEstudio, mostrarPlanEstudio, modificarPlanEstudio, eliminarPlanEstudio } = require('../controllers/')

router.post('/agregar-carreras', agregarPlanEstudio)

router.get('/mostrar-carreras', mostrarPlanEstudio)

router.post('/modificar-carreras/:id', modificarPlanEstudio)

router.post('/eliminar-carreras/:id', eliminarPlanEstudio)

module.exports= router;