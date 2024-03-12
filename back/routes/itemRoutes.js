const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const ItemController = require('../controllers/ItemController');

// Validation rules for the createItem route
const createItemValidationRules = [
    body('name').notEmpty().withMessage('Item name is required'),
    // Add more validation rules as needed
];

// Route for creating a new item with validation middleware and token verification
router.post('/', verifyToken, createItemValidationRules, ItemController.createItem);

// Routes for fetching, updating, and deleting items with token verification
router.get('/', verifyToken, ItemController.getAllItems);
router.get('/:id', verifyToken, ItemController.getItemById);
router.put('/:id', verifyToken, ItemController.updateItem);
router.delete('/:id', verifyToken, ItemController.deleteItem);

module.exports = router;
