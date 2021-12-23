const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("luckybag", {
        bag_id: {
            type: DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'Bag',
        tableName: 'bag',
        paranoid: false,
        charset: "UTF8MB4",
        collate: "UTF8MB4_GENERAL_CI"
    });
};