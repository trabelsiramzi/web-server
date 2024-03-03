const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes'); // Importer les routes utilisateur
const roleRoutes = require('./roleRoutes'); // Importer les routes des rôles
const authRoutes = require('./authRoutes'); // Importer les routes d'authentification
const menuRoutes = require('./menuRoutes'); // Importer les routes de menus
const orderRoutes = require('./orderRoutes'); // Importer les routes de commandes
const reservationRoutes = require('./reservationRoutes'); // Importer les routes de réservations
const reviewRoutes = require('./reviewRoutes'); // Importer les routes d'avis

// Utiliser les routes utilisateur
router.use('/users', userRoutes);

// Utiliser les routes des rôles
router.use('/roles', roleRoutes);

// Utiliser les routes d'authentification
router.use('/auth', authRoutes);

// Utiliser les routes de menus
router.use('/menus', menuRoutes);

// Utiliser les routes de commandes
router.use('/orders', orderRoutes);

// Utiliser les routes de réservations
router.use('/reservations', reservationRoutes);

// Utiliser les routes d'avis
router.use('/reviews', reviewRoutes);

module.exports = router;
