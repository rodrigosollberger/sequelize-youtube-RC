const Sequelize = require("sequelize"); //creating the Sequelize class from the package and storing it in a variable
const sequelize = require("../util/database"); //calling the database connection and storing in a variable

/*
    CREATING THE CUSTOMER TABLE
    using the define method on the sequelize instance to create the table's fields
    the define method takes two formatNamedParameters. The first sets the name of
    the table while the second is an object describing each of the fields of the table.
    The object key is the field name while the object value for each  will itself be
    an object where we describe how each field will look 
*/
const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Customer; //thus, we have a complete customer model and can export it