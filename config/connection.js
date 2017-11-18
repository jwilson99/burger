// requires mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.JAWDB_URL || 3306,
    host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "evv8johptbf65ip7",
    password: "qinxglhpadhnsn1u",
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