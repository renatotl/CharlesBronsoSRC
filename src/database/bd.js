const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        
        dialect: "postgres",
        dialectOption: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);



module.exports = sequelize;