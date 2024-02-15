const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

router.get('/', RoleController.getAllRoles);
router.get('/:id', RoleController.getRoleById);
router.post('/', RoleController.createRole);
router.put('/:id', RoleController.updateRoleById);
router.delete('/:id', RoleController.deleteRoleById);

module.exports = router;
