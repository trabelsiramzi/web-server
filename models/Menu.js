const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const Category = require('./Category');

const Menu = sequelize.define('Menu', {
  name: DataTypes.STRING
});

Menu.hasMany(Category);
Category.belongsTo(Menu);

module.exports = Menu;
