const file_system=require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const usuariosController = require('../controllers/usuarios_controller');


router.get('/Logout', usuariosController.logout);


module.exports = router;
