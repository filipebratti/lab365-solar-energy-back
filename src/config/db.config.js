const { config } = require("dotenv");
config();
var parse = require('pg-connection-string').parse;
var configdatabase = parse(process.env.HOST);

module.exports = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE,
  port: process.env.PORT,
  ssl: true, // Habilita o uso de SSL
  dialectOptions: {
    ssl: {
      require: true, // Define o sslmode para "require"
    },
  },
  define: {
    underscored: true,
    underscoredAll: true,
  }
};
