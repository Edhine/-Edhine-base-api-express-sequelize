/**
 * Rutas API Rest De Prueba
 * @author Edhine
 */
'use strict';

var express = require('express');
var PruebaControler = require('../controllers/prueba');

var api = express.Router();

/**
 * API Rest Prueba
 * @method POST
 */
api.post('/', PruebaControler.prueba);

module.exports = api;