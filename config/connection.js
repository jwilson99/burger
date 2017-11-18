// requires mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection( process.env.JAWDB_URL || {
    port: 3306,
    host: "localhost",
    user: "root1",
    password: "",
    database: "burgers_db"
});

// make connection
connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
    }
    else{
        console.log("connected as id " + connection.threadId);
    }
});

// export connection for orm use
module.exports = connection;