const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const UserController = require('../controllers/UserController');

// Protected route example
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route for users' });
});

// Routes for users
router.get('/', verifyToken, UserController.getAllUsers);
router.post('/', UserController.createUser); // No token verification for createUser
router.get('/:id', verifyToken, UserController.getUserById);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);

module.exports = router;
