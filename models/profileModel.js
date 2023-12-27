const {DataTypes} = require('sequelize');
const sequelize = require('../db/connection');
const User = require('./userModel');
const Profile = sequelize.define('Profile', {
    id: {
        type: DataTypes.INTEGER,        
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

});
Profile.associations = () => {
    Profile.belongsTo(User, {
        foreignKey: 'user_id',
    });
};


module.exports = Profile;
