const file_system=require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const personasController = require('../controllers/personas_controller');
const isAuth = require('../util/is-auth');


router.get('/Escribe',  isAuth,personasController.getNuevaPersona);

router.post('/Escribe',  isAuth, personasController.postNuevaPersona);


router.get('/',  isAuth, personasController.get);

router.get('/:EspID', isAuth, personasController.getespecie);

router.post('/eliminar', personasController.postEspecie);


module.exports = router;
