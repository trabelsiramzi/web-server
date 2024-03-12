const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const ENV = dotenv.config().parsed;
const connexion = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
});

module.exports = connexion;
