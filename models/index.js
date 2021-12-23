'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  { ... config, sync: false }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Luckybag = require("./luckybag")(sequelize, Sequelize);
db.Letter = require("./letter")(sequelize, Sequelize);

db.User.hasMany(db.Luckybag, { foreignKey: "bag_id", targetKey: "user_id" });
db.Luckybag.belongsTo(db.User, { foreignKey: "bag_id" });

db.Luckybag.hasMany(db.Letter, { foreignKey: "bag_id", targetKey: "bag_id" });
db.Letter.belongsTo(db.Luckybag, { foreignKey: "bag_id" });

module.exports = db;
