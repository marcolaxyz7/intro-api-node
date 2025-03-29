const express = require('express');
const router =  express.Router();

const reservas_ambientesaController = require('../controllers/reservas_ambientes');

router.get('/reservas_ambientes', reservas_ambientesaController.listarreservas_ambientes);

modulo.exports = router;