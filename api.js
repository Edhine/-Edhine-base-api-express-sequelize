/**
 * Servidor
 * @author Edhine
 */
'use strict';

var listEndpoints = require('express-list-endpoints');
var app = require('./app');

// Servidor Express
app.listen(process.env.PORT_WEB, () => {

    logger.info('---------------------------------------------------------------------------');
    logger.info('\t\t\t Servidor Base Express');
    logger.info('\t\t\t    Autor: Edhine');
    logger.info('---------------------------------------------------------------------------\n');
    logger.info('---------------------------------------------------------------------------');
    logger.info(`\t\t     Servidor REST OK: Puerto ${process.env.PORT_WEB}`);
    logger.info('---------------------------------------------------------------------------\n');
    logger.debug('-------------------------------------------------------------------------');
    logger.debug(`\t\t\t\tBase De Datos`);
    logger.debug('-------------------------------------------------------------------------');
    let configDB = require('./database/bd.json')[process.env.NODE_ENV || 'dev'];
    logger.debug(`Database: ${configDB.database} \t\t Port: ${configDB.port} \t\t Dialect: ${configDB.dialect}`);
    logger.debug('-------------------------------------------------------------------------\n');
    logger.debug('-------------------------------------------------------------------------');
    logger.debug(`\t\t    Peticiones REST`);
    logger.debug('-------------------------------------------------------------------------');
    listEndpoints(app).forEach(function (route, index) {
        logger.debug(`${index + 1}.- ${JSON.stringify(route)}`);
    });

    logger.debug('-------------------------------------------------------------------------');

});


