// requires express
var express = require("express");
var router = express.Router();

//import model to use database functions
var burger = require("../models/burger");

// routes
router.get("/", function(req,res){

});

router.post("/api/burgers", function(req,res){

});

router.put("/api/api/burgers/:id", function(req,res){

});

router.delete("/api/burgers/:id", function(req,res){

});

// exports routes for server.js to use
module.exports = router;