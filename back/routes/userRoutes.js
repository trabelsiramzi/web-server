const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const UserController = require('../controllers/UserController');

// Protected route example
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route for users' });
});

// Validation rules for the createUser route
const createUserValidationRules = [
    body('email').isEmail().normalizeEmail(),
    body('mot_de_passe').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Add more validation rules as needed
];

// Route for creating a new user with validation middleware and no token verification
router.post('/', createUserValidationRules, UserController.createUser);

// Routes for fetching, updating, and deleting users with token verification
router.get('/', verifyToken, UserController.getAllUsers);
router.get('/:id', verifyToken, UserController.getUserById);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);

module.exports = router;