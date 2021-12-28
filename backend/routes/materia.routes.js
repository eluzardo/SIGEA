const {Router} = require('express')
const router= Router();
const {agregarMateria} = require('../controllers/materia.controller')

router.get('/agregar-materias', agregarMateria)

module.exports= router;