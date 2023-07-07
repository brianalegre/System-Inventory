// Import Model and Sequelize
const { Model, DataTypes, INTEGER, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

// Create Systems Model
class Systems extends Model { }

Systems.init(
    {
        system_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        system_name: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
        },
        ip_address: {
            type: DataTypes.STRING(16),
            allowNull: true,
            unique: true,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Systems',
    }
)

// Export
module.exports = Systems