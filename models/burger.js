// imports ORM to create functions and interact with database
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function(objCalVals, condition, cb) {
        orm.update("burgers", objCalVals, condition, function(res){
            cd(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cd(res);
        });
    }
};

// exports database functions for the controller to use
module.exports = burger;