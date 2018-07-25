#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} = require('./index');

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address'
  }
];

program 
    .version(`
    ___      _                 ___ _       _____           _                                   _____  _     _____ 
    / _ \\    | |               /   ( )     /  __ \\         | |                                 /  __ \\| |   |_   _|
   / /_\\ \\ __| |_ ____      __/ /| |/ ___  | /  \\/_   _ ___| |_ ___  _ __ ___   ___ _ __ ______| /  \\/| |     | |  
   |  _  |/ _\` | \'__\\ \\ /\\ / / /_| | / __| | |   | | | / __| __/ _ \\| \'_ \` _ \\ / _ \\ \'__|______| |    | |     | |  
   | | | | (_| | |   \\ V  V /\\___  | \\__ \\ | \\__/\\ |_| \\__ \\ || (_) | | | | | |  __/ |         | \\__/\\| |_____| |_ 
   \\_| |_/\\__,_|_|    \\_/\\_/     |_/ |___/  \\____/\\__,_|___/\\__\\___/|_| |_| |_|\\___|_|          \\____/\\_____/\\___/                                                                                                           
    v.1.0.2`, '-v, --version')
  .description('Client Management System')

// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer')
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({firstname, lastname, phone, email});
//   });

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(name => findCustomer(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action(_id => {
    prompt(questions).then(answers => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action(_id => removeCustomer(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listCustomers());

program.parse(process.argv);