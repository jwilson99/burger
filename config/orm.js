// import mySQL connection
var connection = require("../config/connection.js");

//helper functions

// sql statement functions
var orm = {
    all: function(tableInput, cb) {

    },
    create: function(table, cols, vals, cb) {

    },
    update: function(table, objColVals, condition, cb){

    },
    delete: function(table, condition, cb){

    }
};

//exports the orm for the model
module.exports = orm;