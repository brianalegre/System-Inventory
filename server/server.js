// Import express
const express = require('express')
const app = express()

// SQL connection
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 3001;

// Create route
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

// Tell the backend which port the backend started on
app.listen(5000, () => { console.log("Server started on port 5000") })

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
