// Import express
const express = require('express')
const app = express()

// Create route
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

// Tell the backend which port the backend started on
app.listen(5000, () => { console.log("Server started on port 5000") })