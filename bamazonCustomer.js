var mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

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

function start(){
    connection.query("SELECT * FROM `products`", function(err, res){
        if (err) { throw err; }
        if (res && res.length){
            console.table(res);
        }
        inquirer
        .prompt([
        {    
            name: "choice",
            message: "What is the item number of the product you would like to buy? or type 'q' to quit",
            validate: function(value) {
                if(value === 'q' || isNaN(value) === false && parseInt(value) > 0) {
                    return true;
                }
                return false;
            }
        }]).then(function (answer) {
            if(answer.choice === 'q') {
                connection.end();
            }
            else {
                quantity(answer.choice);
            }
        });
    });
}
function quantity(choice) {
    var itemId = choice;
    inquirer
    .prompt([
        {
        name: "quantity",
        message: "How many of them would you like to buy? or type 'q' to quit",
        validate: function(value) {
            if (value === 'q' || isNaN(value) === false && parseInt(value) > 0) {
                return true;
            }
            return false;
        }
        }]).then(function(answer) {
            if (answer.quantity === 'q') {
                connection.end();
            }
            else {
                stockCheck(itemId, answer.quantity);
            }
        });
}
function stockCheck(id, quantity) {
    var amount = parseInt(quantity);
    connection.query("SELECT stock_quantity, price FROM `products` WHERE ?", {item_id: id}, function (err, res){
        var price = Number(res[0].price);
        if (err) throw err;
        if (res && res.length) {
            if (res[0].stock_quantity >= amount) {
                connetion.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (res[0].stock_quantity - amount)
                        },
                        {
                            item_id: id
                        },
                    ],
                    function (err) {
                        if (err) throw err;
                        console.log("Congratlations on your purchase, your total is $ " + (price*amount));
                        start();
                    }
                );
            }
            else {
                console.log("Unfortunately we do not have the availble stock to fulfill that order");
                start();
            }
        }
 });
}