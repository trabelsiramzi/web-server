const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');

const Item = sequelize.define('Item', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT
});

module.exports = Item;
