const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');

const Reservation = sequelize.define('Reservation', {
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false // Ne peut pas être nul
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false // Ne peut pas être nul
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false // Ne peut pas être nul
  },
  party_size: {
    type: DataTypes.INTEGER,
    allowNull: false // Ne peut pas être nul
  }
}, {
  timestamps: false // Désactiver les horodatages automatiques
});

module.exports = Reservation;
