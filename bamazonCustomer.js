var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Bagheera11",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

funtion start() {
    connection.query('SELECT * FROM `products`', function(err, res){
        if (err) { throw err; }
        if (res && res.length){
            console.table(res);
        }
    });
}
