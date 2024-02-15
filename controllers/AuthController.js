const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const AuthController = {
  login: async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials User' });
      }
      console.log('Password:', mot_de_passe); // Log the provided password
      console.log('Hashed Password:', user.mot_de_passe); // Log the hashed password from the database

      // Compare the provided password with the hashed password stored in the database
      bcrypt.compare(mot_de_passe, user.mot_de_passe, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Passwords match, generate JWT token
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = AuthController;
