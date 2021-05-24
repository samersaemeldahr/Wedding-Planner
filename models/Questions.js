const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init (
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spouseName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weddingDate: {
            type:DataTypes.STRING,
        },
        venueName: {
            type:DataTypes.STRING,
        },
        venueLocation: {
            type:DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize
    }
)
module.exports = Questions