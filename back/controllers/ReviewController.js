const Review = require('../models/Review');
const { validationResult } = require('express-validator');

const ReviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createReview: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newReview = await Review.create(req.body);
      res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getReviewById: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.status(200).json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      await review.update(req.body);
      res.status(200).json({ message: 'Review updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      await review.destroy();
      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = ReviewController;
