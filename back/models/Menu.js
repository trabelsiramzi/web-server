const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const Category = require('./Category');

const Menu = sequelize.define('Menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false // Désactiver les horodatages automatiques
});

Menu.hasMany(Category);
Category.belongsTo(Menu);

module.exports = Menu;
