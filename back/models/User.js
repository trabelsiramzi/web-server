// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion.js');
const bcrypt = require('bcrypt');

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
  timestamps: false,
  hooks: {
    beforeCreate: async (user) => {
      // Hash the password before creating the user
      const hashedPassword = await bcrypt.hash(user.mot_de_passe, 10);
      user.mot_de_passe = hashedPassword;
    }
  }
});

module.exports = User;
