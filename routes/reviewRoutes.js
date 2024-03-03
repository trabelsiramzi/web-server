const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const ReviewController = require('../controllers/ReviewController');

// Validation rules for the createReview route
const createReviewValidationRules = [
    body('customer_name').notEmpty().withMessage('Customer name is required'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
    // Add more validation rules as needed
];

// Route for creating a new review with validation middleware and token verification
router.post('/', verifyToken, createReviewValidationRules, ReviewController.createReview);

// Routes for fetching, updating, and deleting reviews with token verification
router.get('/', verifyToken, ReviewController.getAllReviews);
router.get('/:id', verifyToken, ReviewController.getReviewById);
router.put('/:id', verifyToken, ReviewController.updateReview);
router.delete('/:id', verifyToken, ReviewController.deleteReview);

module.exports = router;
