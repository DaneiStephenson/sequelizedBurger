var path = require("path");
var Burger = require("./../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(results) {
		res.render("index", {burger_data: results});
    });
  });

};