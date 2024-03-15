const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');

const Item = sequelize.define('Item', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT
}, {
  timestamps: false // Désactiver les horodatages automatiques
});
module.exports = Item;

