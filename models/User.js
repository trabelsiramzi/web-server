// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion.js');

const User = sequelize.define('User', {
  nom: {
    type: DataTypes.STRING
  },
  prenom: {
    type: DataTypes.STRING
  },
  naissance: {
    type: DataTypes.DATE
  },
  photo: {
    type: DataTypes.STRING
  },
  telephone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  mot_de_passe: {
    type: DataTypes.STRING
  }
});

module.exports = User;

