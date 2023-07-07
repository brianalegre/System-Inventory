// Import Dependencies
const sequelize = require("../config/connection")


// Start seed
const startSeed = async () => {
    try {
        await sequelize.sync({ force: true })
        console.log('--- DB SYNCD! ---')
    } catch (err) {
        console.log(err)
    }
    process.exit(0);
}

startSeed();
