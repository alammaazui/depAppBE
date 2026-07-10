const sequelize = require("../config/db.config");
const {DataTypes} = require('sequelize')
const User = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
            primaryKey : true,
            unique :true,
            allowNull:false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
   
);

module.exports = User