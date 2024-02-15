const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const roleRoutes = require('./roleRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
// Routes for authentication
router.use('/auth', authRoutes);
module.exports = router;
