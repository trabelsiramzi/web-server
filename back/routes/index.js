const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes'); // Import user routes
const roleRoutes = require('./roleRoutes'); // Import role routes
const authRoutes = require('./authRoutes'); // Import auth routes
const menuRoutes = require('./menuRoutes'); // Import menu routes
const orderRoutes = require('./orderRoutes'); // Import order routes
const reservationRoutes = require('./reservationRoutes'); // Import reservation routes
const reviewRoutes = require('./reviewRoutes'); // Import review routes
const itemRoutes = require('./itemRoutes'); // Import item routes
const categoryRoutes = require('./categorieRoutes'); // Import category routes

// Use user routes
router.use('/users', userRoutes);

// Use role routes
router.use('/roles', roleRoutes);

// Use auth routes
router.use('/auth', authRoutes);

// Use menu routes
router.use('/menus', menuRoutes);

// Use order routes
router.use('/orders', orderRoutes);

// Use reservation routes
router.use('/reservations', reservationRoutes);

// Use review routes
router.use('/reviews', reviewRoutes);

// Use item routes
router.use('/items', itemRoutes);

// Use category routes
router.use('/categories', categoryRoutes);

module.exports = router;
