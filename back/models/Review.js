const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const User = require('./User');

const Review = sequelize.define('Review', {
  comment: DataTypes.TEXT,
  rating: DataTypes.INTEGER,
  customer_name: DataTypes.STRING // Add the new attribute
}, {
  timestamps: false // Désactiver les horodatages automatiques
});

Review.belongsTo(User);
User.hasMany(Review);

module.exports = Review;
