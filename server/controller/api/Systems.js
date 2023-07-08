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

// Export
module.exports = router;