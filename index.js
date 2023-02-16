const sequelize = require("./util/database"); //calling the established database connection

const Customer = require("./models/customer"); //calling the defined customer model

const Order = require("./models/order"); //calling the defined order model

/*
we are ready to sync our javascript models to SQL tables
In order to do so, we use the sync method provided by sequelize
*/

Customer.hasMany(Order); //we are creating  link between the two tables where several orders relate to one customer
                         //this will also mean that a foreign key from 'Customer' will appear in the table 'Order'

let customerId = null; //creating the customer Id variable so it can be used below

sequelize //we can use these methods from the sequelize object because its the same object used to create our models
    .sync({force: true}) //force-sync means that if the table has already been generated, it's going to be dropped and created again
    //.sync()
    .then(result => {
        return Customer.create({
            name: "Rodrigo Couto",
            email: "rc@email.com",
        })
        console.log(result);
        
    })
    .then(customer => {
        customerId = customer.id //associating the customerId variable to where I have the customer and can locate him by his Id

        console.log("First Customer Created: ", customer);
        
        /*
        we are inside the 'customer', thus is where we insert where the customer's order is placed
        by utilizing the customer's 'createOrder()' method and returning it, we associate the
        customer's Id to the Order in the order table
        */
        return customer.createOrder({
            total: 45,
        });
    })
    .then(order => {
        console.log("Order is: ", order);

        //the below is the SELECT statement from SQL and in the code below allows us to select all orders made by the customer
        return Order.findAll({ where: customerId });

    })
    .then(orders => {
        console.log("All the orders are: ", orders);
    })
    .catch((err)=>{
        console.log(err);
    });