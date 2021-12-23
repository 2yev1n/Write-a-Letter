const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("letter", {
        bag_id: {
            type: DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
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
        tableName: 'letter',
        paranoid: false,
        charset: "UTF8MB4",
        collate: "UTF8MB4_GENERAL_CI"
    });
};