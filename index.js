const mongoose = require('mongoose');

// Map Global Promise - Get rid of warning
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customer-cli', {
    useMongoClient: true
});

// Import model 
const Customer = require('./models/customer');

// Add Customer


// Find Customer