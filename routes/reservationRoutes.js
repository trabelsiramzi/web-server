const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const ReservationController = require('../controllers/ReservationController');

// Validation rules for the createReservation route
const createReservationValidationRules = [
    body('customer_name').notEmpty().withMessage('Customer name is required'),
    body('date').notEmpty().isDate().withMessage('Date must be a valid date'),
    // Add more validation rules as needed
];

// Route for creating a new reservation with validation middleware and token verification
router.post('/', verifyToken, createReservationValidationRules, ReservationController.createReservation);

// Routes for fetching, updating, and deleting reservations with token verification
router.get('/', verifyToken, ReservationController.getAllReservations);
router.get('/:id', verifyToken, ReservationController.getReservationById);
router.put('/:id', verifyToken, ReservationController.updateReservation);
router.delete('/:id', verifyToken, ReservationController.deleteReservation);

module.exports = router;
