const file_system=require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const personasController = require('../controllers/personas_controller');


router.get('/Escribe', personasController.getNuevaPersona);

router.post('/Escribe', personasController.postNuevaPersona);


router.get('/', personasController.get);

router.get('/:EspID', personasController.getespecie);


module.exports = router;
