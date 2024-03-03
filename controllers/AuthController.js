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
      
      // Compare the provided password with the hashed password stored in the database
      bcrypt.compare(mot_de_passe, user.mot_de_passe, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Passwords match, generate JWT token
        const payload = {
          user: {
            id: user.id,
            email: user.email,
            nom: user.nom,
            prenom: user.prenom
            // Add more user details as needed
          }
        };
        
        // Retrieve the JWT secret key from environment variables
        const jwtSecret = process.env.JWT_SECRET;
        
        // Use jwtSecret in JWT signing process
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ token, user: payload.user });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = AuthController;
