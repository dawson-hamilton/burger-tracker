const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "eat_da_burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: ", + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;