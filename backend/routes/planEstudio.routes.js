const { Router } = require('express');
const router = Router();
const {
  agregarPlanEstudio,
  mostrarPlanEstudio,
  modificarPlanEstudio,
  eliminarPlanEstudio,
} = require('../controllers/PlanEstudio.controller');

router.post('/agregar-plan-estudio', agregarPlanEstudio);

router.get('/mostrar-plan-estudio', mostrarPlanEstudio);

router.post('/modificar-plan-estudio/:id', modificarPlanEstudio);

router.post('/eliminar-plan-estudio/:id', eliminarPlanEstudio);

module.exports = router;
