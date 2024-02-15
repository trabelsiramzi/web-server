const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

// Route to fetch all roles
router.get('/', RoleController.getAllRoles);

// Route to create a new role
router.post('/', RoleController.createRole);

// Route to fetch a single role by ID
router.get('/:id', RoleController.getRoleById);

// Route to update a role by ID
router.put('/:id', RoleController.updateRole);

// Route to delete a role by ID
router.delete('/:id', RoleController.deleteRole);

module.exports = router;
