/*********************************************************************************************
 *                                          [SEQUELIZE]
 *                                         @author Edhine
 *                          [NPM] [https://www.npmjs.com/package/sequelize]
 ********************************************************************************************/
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const baseModelos = path.join(__dirname, '../models/');
const config = require('./bd.json')[process.env.NODE_ENV];
const db = {};

let sequelize;
if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(process.env.NODE_ENV, config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(baseModelos)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== baseModelos) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(baseModelos, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;