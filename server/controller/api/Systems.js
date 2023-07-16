// Import the router, and the models
const router = require('express').Router();
const { Systems } = require('../../models')


// Get All Systems
// Endpoint /api/systems
router.get('/', async (req, res) => {
    try {
        // Query All Systems
        const getAllSystems = await Systems.findAll({
            include: [{ all: true, nested: true }],
        })

        // Return data
        res.status(200).json(getAllSystems)

        // Catch Any Errors
    } catch (err) {
        res.status(500).json('Something went wrong', err);
    }
})

// Get Single System
// Endpoint /api/systems/:id
router.get('/:system_id', async (req, res) => {
    try {
        // Query by system_id
        const getSingleSystem = await Systems.findByPk(req.params.system_id, {
        })

        // If no system found
        if (!getSingleSystem) {
            res.status(404).json({ message: 'No System Found with that ID' })
        }

        // Return data
        res.status(200).json(getSingleSystem)

    } catch (err) {
        res.status(500).json('getSingleSystem - something went wrong')
    }
})

// Create New System
// Endpoint /api/systems
router.post('/', async (req, res) => {
    try {
        // Create new system
        const createNewSystem = await Systems.create({
            system_name: req.body.system_name,
            ip_address: req.body.ip_address,
            state: req.body.state,
        })
        // Response
        res.json('Success, new system created')
        // Catch errors
    } catch (err) {
        res.status(400).json('Unable to create new system', err)
    }
});

// Export
module.exports = router;