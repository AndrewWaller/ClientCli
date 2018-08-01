#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addClient,
  findClient,
  updateClient,
  removeClient,
  listClients
} = require('./index');

// Client Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Client First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Client Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Client Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Client Email Address'
  }
];

// Version Command
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

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a client')
  .action(() => {
    prompt(questions).then(answers => addClient(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a client')
  .action(name => findClient(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a client')
  .action(_id => {
    prompt(questions).then(answers => updateClient(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a client')
  .action(_id => removeClient(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all clients')
  .action(() => listClients());

program.parse(process.argv);