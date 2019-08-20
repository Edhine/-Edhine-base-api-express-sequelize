/**
 * Controlador Prueba
 * @author Edhine
 * 
 * @method POST prueba
 */
'use strict';

const db = require('../database/sequelize');

/**
 * Metodo de prueba
 * @param {*} req 
 * @param {*} res 
 * [SEQUELIZE] [https://www.npmjs.com/package/sequelize]
 */
function prueba(req, res) {

    db["nombre_tabla_bd"].findAll().then(datos => {
        return res.json(JSON.parse(JSON.stringify(datos)));
    });
}

module.exports = {
    prueba
};