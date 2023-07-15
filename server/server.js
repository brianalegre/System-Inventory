// Import Express
const express = require('express');
const session = require('express-session');

// Import Cors
const cors = require("cors");

// Import Module for directories
const path = require('path');

// Import API controller
const routes = require('./controller');

// Import Sequelize
const sequelize = require('./config/connection');


// Start App
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use API Endpoints at http://localhost:${PORT}`);
    })
});
