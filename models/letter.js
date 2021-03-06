const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("letter", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        bag_id: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        context: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Letter',
        tableName: 'letters',
        paranoid: false,
        charset: "UTF8MB4",
        collate: "UTF8MB4_GENERAL_CI"
    });
};