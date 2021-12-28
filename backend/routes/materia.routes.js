const {Router} = require('express')
const router= Router();
const {agregarMateria, mostrarMateria, modificarMateria, eliminarMateria } = require('../controllers/materia.controller')

router.post('/agregar-materias', agregarMateria)

router.get('/mostrar-materias', mostrarMateria)

router.post('/modificar-materias/:id', modificarMateria)

router.post('/eliminar-materias/:id', eliminarMateria)

module.exports= router;