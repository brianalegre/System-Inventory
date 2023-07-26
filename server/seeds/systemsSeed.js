// Import System Model
const { Systems } = require('../models')

// Systems Data
const systemsData = [
    {
        system_name: "SYS-1",
        ip_address: "192.168.100.101",
        state: 0,
    },
    {
        system_name: "SYS-2",
        ip_address: "192.168.100.102",
        state: 1,
    },
    {
        system_name: "SYS-3",
        ip_address: "192.168.100.103",
        state: 0,
    },
    {
        system_name: "SYS-4",
        ip_address: "192.168.100.104",
        state: 1,
    },
    {
        system_name: "SYS-5",
        ip_address: "192.168.100.105",
        state: 0,
    },
    {
        system_name: "SYS-6",
        ip_address: "192.168.100.106",
        state: 1,
    },
    {
        system_name: "SYS-7",
        ip_address: "192.168.100.107",
        state: 1,
    },
    {
        system_name: "SYS-8",
        ip_address: "192.168.100.108",
        state: 0,
    },
    {
        system_name: "SYS-9",
        ip_address: "192.168.100.109",
        state: 1,
    },
    {
        system_name: "SYS-10",
        ip_address: "192.168.100.110",
        state: 0,
    }

]

// Start Seed
const seedSystems = () => Systems.bulkCreate(systemsData)

// Export
module.exports = seedSystems