const Seuqelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        user_id: {
            type: DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: false,
        charset: "UTF8MB4",
        collate: "UTF8MB4_GENERAL_CI"
    });
};