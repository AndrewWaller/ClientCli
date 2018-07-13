const mongoose = require('mongoose');

// Map Global Promise - Get rid of warning
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customer-cli', { useNewUrlParser: true });

// Import model 
const Customer = require('./models/customer');

// Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added.');
    }).catch(function () {
        console.info('Customer could not be added.');
    })
    db.close();
}

// Find Customer
const findCustomer = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            db.close();
        });
}

// Export All Methods
module.exports = {
    addCustomer, 
    findCustomer
}