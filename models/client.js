const mongoose = require('mongoose');

// Client Schema
const clientSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: Number },
    email: { type: String }
});

// Define and support
module.exports = mongoose.model('Client', clientSchema);