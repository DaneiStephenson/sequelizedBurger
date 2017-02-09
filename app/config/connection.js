var Sequelize = require("sequelize");




var sequelize = new Sequelize("sequelize_burger",  "js6aj9sr2imcdrh9", "g6mgjqn8z5fqsl8o",{
	
  	host: "lalv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  	
  	dialect: "mysql",
  	pool: {
    	max: 5,
    	min: 0,
    	idle: 10000
  	}
});
// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("sequelize_burger", "root", "", {

//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Exports the connection for other files to use
module.exports = sequelize;


