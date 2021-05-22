const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Info extends Model { }

Info.init(
    {
        greeting: {
            type: DataTypes.STRING,
        },
        catering: {
            type: DataTypes.STRING,
        },
        photographer: {
            type: DataTypes.STRING,
        },
        dj: {
            type: DataTypes.STRING,
        },
        kids: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Info'
    }
);

module.exports = Info;
