/**
 * Servidor
 * @author Edhine
 */
'use strict';

var listEndpoints = require('express-list-endpoints');
var app = require('./app');

// Servidor Express
app.listen(process.env.PORT_WEB, () => {

    logger.info('-----------------------------------------------------------');
    logger.info('\t\t Servidor Base Express');
    logger.info('\t\t    Autor: Edhine');
    logger.info('-----------------------------------------------------------\n');
    logger.info('-----------------------------------------------------------');
    logger.info(`\t     Servidor REST OK: Puerto ${process.env.PORT_WEB}`);
    logger.info('-----------------------------------------------------------\n');
    logger.debug('----------------------------------------------------------');
    logger.debug(`\t\t    Peticiones REST`);
    logger.debug('----------------------------------------------------------');
    listEndpoints(app).forEach(function (route, index) {
        logger.debug(`${index + 1}.- ${JSON.stringify(route)}`);
    });

    logger.debug('----------------------------------------------------------');

});


