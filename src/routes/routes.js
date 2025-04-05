const express = require('express');
const router =  express.Router();

const reservas_ambientesaController = require('../controllers/reservas_ambientes');

router.get('/reservas_ambientes', reservas_ambientesaController.listarreservas_ambientes);
router.post('/reservas_ambientes', reservas_ambientesaController.cadastrarreservas_ambientes);
router.patch('/reservas_ambientes', reservas_ambientesaController.editarreservas_ambientes);
router.delete('/reservas_ambientes', reservas_ambientesaController.apagarreservas_ambientes);

module.exports = router;