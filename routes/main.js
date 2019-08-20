/*********************************************************************************************
 *                        Variables de enrutamiento de peticiones REST
 *                                      @author Edhine
 ********************************************************************************************/
'use strict';

var express = require('express');
var routes = express.Router();

/*********************************************************************************************
 *                                             Rutas
 * 
 * @description => Instancia de las rutas disponibles para la API
 ********************************************************************************************/

/** 
 * @TestRest
 * [RutaDePrueba]
 * @description Rest De Prueba Inicial, solo devuelve un modelo establecido
 */
var prueba_routes = require('./prueba');
routes.use('/', prueba_routes);

// Exportar
module.exports = routes;