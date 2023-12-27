const {DataTypes} = require('sequelize');
const sequelize = require('../db/connection');
const Profile = require('./profileModel');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,        
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.associations = () => {
    User.hasOne(Profile, {
        foreignKey: 'user_id',
    });
};

module.exports = User;