// models/Role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion.js');

const Role = sequelize.define('Role', {
  nom: {
    type: DataTypes.STRING,
    unique: true
  }
});

module.exports = Role;
