const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const User = require('./User');
const Item = require('./Item');

const Order = sequelize.define('Order', {
  totalPrice: DataTypes.FLOAT
});

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Item, { through: 'OrderItem' });
Item.belongsToMany(Order, { through: 'OrderItem' });

module.exports = Order;
