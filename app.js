/**
 * Configuracion y preparacion APP
 * @author Edhine
 */
'use strict';

// Configuraciones estandar
require('./config/config');

// Express
var express = require('express');
var app = express();

// Logger REST
var loggerRest = require('morgan');
app.use(loggerRest(process.env.NODE_ENV));

// Middleware (Parser JSON)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/***********************************************
 *          Seguridad De Las Rutas
 *         @access REST (Middleware)      
 **********************************************/
var helmet = require('helmet');
app.use(helmet());

/***********************************************
 * Habilitador de Cross-origin resource sharing
 *         @access REST (Middleware)      
 **********************************************/
var cors = require('cors');
app.use(cors());

// Levantamiento Enrutador REST
var routes = require('./routes/main');
app.use(routes);

// Exportar
module.exports = app;

