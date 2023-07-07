// Import Dependencies
const sequelize = require("../config/connection")
const seedSystems = require('./systemsSeed')


// Start seed
const startSeed = async () => {
    try {
        await sequelize.sync({ force: true })
        console.log('--- DB SYNCD! ---')

        await seedSystems();
        console.log('--- SYSTEMS SEEDED! ---')

    } catch (err) {
        console.log(err)
    }
    process.exit(0);
}

startSeed();
