const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
