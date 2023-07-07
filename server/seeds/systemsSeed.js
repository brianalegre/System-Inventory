// Import System Model
const { Systems } = require('../models')

// Systems Data
const systemsData = [
    {
        system_name: "SYS-1",
        ip_address: "192.168.100.100",
        state: 0,
    },
    {
        system_name: "SYS-2",
        ip_address: "192.168.100.101",
        state: 1,
    },
]

// Start Seed
const seedSystems = () => Systems.bulkCreate(systemsData)

// Export
module.exports = seedSystems