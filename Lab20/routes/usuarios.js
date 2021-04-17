const file_system=require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const usuariosController = require('../controllers/usuarios_controller');
const isAuth = require('../util/is-auth');

router.get('/Logout', usuariosController.logout);

router.get('/new', isAuth, usuariosController.getNewUser);

router.post('/new',  isAuth,usuariosController.postNewUser);

router.get('/login', usuariosController.getLogin);

router.post('/login', usuariosController.postLogin);

module.exports = router;
