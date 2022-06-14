const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    proces.env.DATABASE_URL,
    {
        
        dialect: "postgres"
    }
);
module.exports = sequelize;