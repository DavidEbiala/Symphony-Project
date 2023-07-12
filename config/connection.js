const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else{
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 8889
        }
    );
}

module.exports = sequelize;