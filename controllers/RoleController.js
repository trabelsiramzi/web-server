const Role = require('../models/Role');

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    // Fetch all roles from the database
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get role by ID
const getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch role by ID from the database
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new role
const createRole = async (req, res) => {
  // Extract role data from request body
  const { nom } = req.body;
  try {
    // Create role in the database
    const newRole = await Role.create({ nom });
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update role by ID
const updateRoleById = async (req, res) => {
  const { id } = req.params;
  // Extract updated role data from request body
  const { nom } = req.body;
  try {
    // Find role by ID and update in the database
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    await role.update({ nom });
    res.status(200).json({ message: 'Role updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete role by ID
const deleteRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    // Find role by ID and delete from the database
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    await role.destroy();
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRoleById,
  deleteRoleById
};
