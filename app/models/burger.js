var Sequelize = require("sequelize");
// orm (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Burger = sequelize.define("burgers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN
    },
    
}, {
    timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Burger;