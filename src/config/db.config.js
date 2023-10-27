const { config } = require('dotenv')
config()

module.exports = {
  dialect: process.env.DIALECT, 
  host: process.env.HOST, 
  username: process.env.USERNAMEDB, 
  password: process.env.PASSWORDDB, 
  database: process.env.DATABASE,
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT, 
  secret_key : process.env.JWT_SECRET,
  define: {
    underscored: true,
    underscoredAll: true
  }
};