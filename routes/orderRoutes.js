const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const OrderController = require('../controllers/OrderController');

// Validation rules for the createOrder route
const createOrderValidationRules = [
    body('customer_name').notEmpty().withMessage('Customer name is required'),
    body('total_amount').isNumeric().withMessage('Total amount must be numeric'),
    // Add more validation rules as needed
];

// Route for creating a new order with validation middleware and token verification
router.post('/', verifyToken, createOrderValidationRules, OrderController.createOrder);

// Routes for fetching, updating, and deleting orders with token verification
router.get('/', verifyToken, OrderController.getAllOrders);
router.get('/:id', verifyToken, OrderController.getOrderById);
router.put('/:id', verifyToken, OrderController.updateOrder);
router.delete('/:id', verifyToken, OrderController.deleteOrder);

module.exports = router;
