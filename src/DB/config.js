const doten = require("dotenv");

doten.config();

// Claves de la Base de datos.

module.exports = {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
};