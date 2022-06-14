const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    proces.env.DATABASE_URL,
    {
        
        dialect: "postgres",
        dialectOption: {
            ssl: {
                require: true,
                rejecUnauthorized: false,
            },
        },
    }
);
module.exports = sequelize;