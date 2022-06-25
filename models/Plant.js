const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    family_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bloom_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    features: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    care_instructions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gallery_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gallery',
            key: 'id',
        },
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Plant',
});

module.exports = Plant;