const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
// When we require this file, nodeJS needs to run the file. When this file is ran,
// we connect to our database and sage the connection object to the variable db.
const db = require('./db');
// require the models index.js file so we can interact with our database
const models = require('./model');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/api/messages/', (req, res) => {
  // Make an async request to our database and fetch everything!
  // Model.find() with no arguments is the analogous to SELECT * FROM Messages in SQL.
  models.Messages.find()
    .then((messages) => {
      // Send a status code and send the payload back to the server
      res.status(200).send(messages);
    });
});

app.post('/api/messages', (req, res) => {
  // Make an asnyc request to our database and create our new document!
  models.Messages.create({
    text: req.body.text,
  })
    .then((message) => {
      res.status(201).send(message);
    });
  // Notice that the we are no longer decorating our incoming object with the date anymore!
  // This is because we set a default value for our createdAt field in our model. If we were
  // log the value of message coming back from the database it would look like:
  /*
    {
      "_id" : ObjectId("5c93fc10632ee97aecbea09b"),
      "text" : "Hello World",
      "createdAt" : ISODate("2019-03-21T21:03:12.337Z"),
      "__v" : 0
    }
   */
});

app.put('/api/messages', (req, res) => {
  res.send('This is our UPDATE route');
});

app.delete('/api/messages', (req, res) => {
  res.send('This is our DELETE route');
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
