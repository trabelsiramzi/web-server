// categorieRoutes.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const {
  createCategorie,
  getAllCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie
} = require('../controllers/CategoryController');

// Validation rules for the createCategorie route
const createCategorieValidationRules = [
  body('name').notEmpty().withMessage('Category name is required'),
  // Add more validation rules as needed
];

// Route for creating a new category with validation middleware and token verification
router.post('/', verifyToken, createCategorieValidationRules, createCategorie);

// Route for fetching all categories with token verification
router.get('/', verifyToken, getAllCategories);

// Route for fetching a category by ID with token verification
router.get('/:id', verifyToken, getCategorieById);

// Route for updating a category by ID with token verification
router.put('/:id', verifyToken, updateCategorie);

// Route for deleting a category by ID with token verification
router.delete('/:id', verifyToken, deleteCategorie);

module.exports = router;
