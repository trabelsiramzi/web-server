// userRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const UserController = require('../controllers/UserController');

// Protected route example
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route for users' });
});

// Other routes for users
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
