const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const ReviewController = require('../controllers/ReviewController');

// Validation rules for creating a review
const createReviewValidationRules = [
  body('comment').trim().notEmpty().withMessage('Comment cannot be empty'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
];

// Route for creating a new review
router.post('/', createReviewValidationRules, ReviewController.createReview);

// Route for fetching all reviews
router.get('/', ReviewController.getAllReviews);

// Route for fetching a review by its ID
router.get('/:id', ReviewController.getReviewById);

// Route for updating a review by its ID
router.put('/:id', ReviewController.updateReview);

// Route for deleting a review by its ID
router.delete('/:id', ReviewController.deleteReview);

module.exports = router;
