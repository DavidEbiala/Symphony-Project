const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'John'
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Doe'
        },
        e_mail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: 'bruh',
            allowNull: false,
          },
        Playlist_Name:{
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;