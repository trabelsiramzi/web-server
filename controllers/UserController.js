const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch user by ID from the database
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  // Extract user data from request body
  const { nom, prenom, naissance, photo, telephone, email, mot_de_passe } = req.body;
  try {
    // Create user in the database
    const newUser = await User.create({ nom, prenom, naissance, photo, telephone, email, mot_de_passe });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  // Extract updated user data from request body
  const { nom, prenom, naissance, photo, telephone, email, mot_de_passe } = req.body;
  try {
    // Find user by ID and update in the database
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ nom, prenom, naissance, photo, telephone, email, mot_de_passe });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    // Find user by ID and delete from the database
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
};
