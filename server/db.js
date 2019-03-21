// First we require the mongoose library, which is an ODM
const mongoose = require('mongoose');

const db = mongoose.connection;

// create database URL. We don't need to first create the fullstack-demo
// database. Mongo will automatically create the database for us.
const dbURL = 'mongodb://localhost/fullstack-demo';

// Connect!
mongoose.connect(dbURL, { useNewUrlParser: true });

// This will let us know if something goes wrong
db.on('error', err => console.error(`An error has occured: ${err}`));
// This will let us know when we are successfully connected.
db.once('open', () => console.log(`Database connected on ${dbURL}`));

module.exports = db;
