const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model { }

Guest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        guestName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodChoice: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Guest'
    }
);

module.exports = Guest;
