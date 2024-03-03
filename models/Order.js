const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');

const Order = sequelize.define('Order', {
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  created_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false // Add this line to disable timestamps
});

module.exports = Order;
