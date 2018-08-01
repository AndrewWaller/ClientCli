const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/clientcli', { useNewUrlParser: true });

// Import model
const Client = require('./models/client');

// Add Client
const addClient = (client) => {
  Client.create(client).then(client => {
    console.info('New Client Added');
    process.exit();
  });
}

// Find Client
const findClient = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Client.find({$or: [{firstname: search}, {lastname: search}]})
    .then(client => {
      console.info(client);
      console.info(`${client.length} matches`);
      process.exit();
    });
}

// Update Client
const updateClient = (_id, client) => {
  Client.update({ _id }, client)
    .then(client => {
      console.info('Client Updated');
      process.exit();
    });
}

// Remove Client
const removeClient = (_id) => {
  Client.remove({ _id })
    .then(client => {
      console.info('Client Removed');
      process.exit();
    });
}

// List Clients
const listClients = () => {
  Client.find()
    .then(clients => {
      console.info(clients);
      console.info(`${clients.length} clients`);
      process.exit();
    });
}

// Export All Methods
module.exports = {
  addClient,
  findClient,
  updateClient,
  removeClient,
  listClients
}