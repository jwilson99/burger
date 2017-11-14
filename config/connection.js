// requires mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});

// make connection
connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for orm use
module.exports = connection;