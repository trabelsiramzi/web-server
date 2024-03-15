// CategoryController.js

const Category = require('../models/Category');
const { validationResult } = require('express-validator');

// Function to create a new category
exports.createCategorie = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new category
    const { name, MenuId } = req.body;
    const category = new Category({ name, MenuId });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll(); // Use findAll() to fetch all categories
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get a category by ID
exports.getCategorieById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id); // Use findByPk() to find category by primary key
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to update a category
exports.updateCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, MenuId } = req.body; // Update for MenuId
    const category = await Category.findByPk(id); // Find category by primary key
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    // Update category properties
    category.name = name;
    category.MenuId = MenuId;
    await category.save(); // Save the updated category

    res.status(200).json(category);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to delete a category
exports.deleteCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id); // Find category by primary key
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await category.destroy(); // Delete the category

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
