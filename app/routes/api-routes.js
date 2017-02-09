var Burger = require("../models/burger.js");


// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/all", function(req, res) {

    Burger.findAll({}).then(function(results) {
      res.json(results);
    });

  });


  app.post("/burgers/create", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);
    Burger.create({
      id: req.body.id,
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,

      
    }).then(function(){
      res.redirect('/');

  });


  app.post("/burgers/update", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body.id);
    Burger.update({
      devoured: 1,
   },
      {
      where: {
      

       
        id: req.body.burger_id

  
    }}).then(function(){
      res.redirect('/');
    })

  });

});
};
