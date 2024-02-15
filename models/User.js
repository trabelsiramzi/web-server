const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion.js');
const Role = require('./Role.js');

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
}, {
  // Add timestamps option to include createdAt and updatedAt columns
  timestamps: false
});


module.exports = User;
