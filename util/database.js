//on this file we establish the connection with the database

const Sequelize = require("sequelize"); //creating a class from the sequelize package and storing in a variable
const path = require("path");
/*
on the constructor below (derived from the class above) we've inserted the following parameters: database 
name, username, password, and a js object that tells the dialect used and where to host. Andy had used the
parameter 'storage' in place of host
*/

const sequelize = new Sequelize("sequelize-youtube", "root", "password", {
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
});

module.exports = sequelize; //exporting the sequelize instance as we want to use it in other files