const Reservation = require('../models/Reservation');

const ReservationController = {
  // Récupérer toutes les réservations
  getAllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Créer une nouvelle réservation
  createReservation: async (req, res) => {
    try {
      const newReservation = await Reservation.create(req.body);
      res.status(201).json(newReservation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Récupérer une réservation par son ID
  getReservationById: async (req, res) => {
    try {
      const reservation = await Reservation.findByPk(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Mettre à jour une réservation par son ID
  updateReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByPk(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      await reservation.update(req.body);
      res.status(200).json({ message: 'Reservation updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Supprimer une réservation par son ID
  deleteReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByPk(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      await reservation.destroy();
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = ReservationController;
