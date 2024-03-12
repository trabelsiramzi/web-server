const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const MenuController = require('../controllers/MenuController');

// Validation rules for the createMenu route
const createMenuValidationRules = [
    body('name').notEmpty().withMessage('Menu name is required'),
    // Add more validation rules as needed
];

// Route for creating a new menu with validation middleware and token verification
router.post('/', verifyToken, createMenuValidationRules, MenuController.createMenu);

// Routes for fetching, updating, and deleting menus with token verification
router.get('/', verifyToken, MenuController.getAllMenus);
router.get('/:id', verifyToken, MenuController.getMenuById);
router.put('/:id', verifyToken, MenuController.updateMenu);
router.delete('/:id', verifyToken, MenuController.deleteMenu);

module.exports = router;
