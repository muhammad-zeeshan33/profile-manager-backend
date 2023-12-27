const { Sequelize } = require('sequelize');
const config = require('../config/enviroments.dev');

const sequelize = new Sequelize({
    database: config.development.db_name,
    username: config.development.db_username,
    password: config.development.db_password,
    host: config.development.host,
    dialect: config.development.dialect,        
    sync: true,
});

module.exports = sequelize;
