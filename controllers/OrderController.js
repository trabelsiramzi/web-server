const Order = require('../models/Order');

const OrderController = {
  // Récupérer toutes les commandes
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Créer une nouvelle commande
  createOrder: async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Récupérer une commande par son ID
  getOrderById: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Mettre à jour une commande par son ID
  updateOrder: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.update(req.body);
      res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Supprimer une commande par son ID
  deleteOrder: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.destroy();
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = OrderController;
