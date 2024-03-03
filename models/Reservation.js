const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const User = require('./User');

const Reservation = sequelize.define('Reservation', {
  date: DataTypes.DATE,
  numberOfPeople: DataTypes.INTEGER
});

Reservation.belongsTo(User);
User.hasMany(Reservation);

module.exports = Reservation;
