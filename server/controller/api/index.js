// Import 
const router = require('express').Router();
const systemsAPI = require('./Systems');

// Routers
router.use('/systems', systemsAPI);

// Export
module.exports = router;