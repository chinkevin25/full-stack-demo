const express = require('express');
const path = require('path');
// morgan is a HTTP request logger middleware for node.js. This helps log details of the requests
// that are being sent to the server. This is extremely useful to see if our server is responding
// correctly.
const morgan = require('morgan');
// cors is a useful library that helps handle our cross origin requests for us!
// Refer to the documentation to see what options are available.
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, '../public')));
// Initialize morgan as a middleware in the 'dev' mode. Refer to the documentation for more details.
app.use(morgan('dev'));
// Initalize cors as a middleware in the default mode. This will enable CORS for all origins
app.use(cors());

// Notice that this middleware is not in our package.json. This comes free with express.
// express.json is a middleware based on body-parser and will help us parse JSON data and
// automatically add the information to req.body
app.use(express.json());

// Let's create a non-persistent datastore until we introduce databases!
const messages = [];

app.get('/api/messages/', (req, res) => {
  // Send all the messages back to the requester
  res.send(messages);
});

app.post('/api/messages', (req, res) => {
  const newMessage = {
    text: req.body.text,
    createdAt: new Date(),
  };
  // Add message to our in-memory (non-persistent datastore)
  messages.push(newMessage);
  res.status(201); // Status code 201 means item has successfuly been created.

  // It's common for the item that has been created to be returned back to the
  // requester. Often the server will add some extra information (e.g. createdAt)
  // and then save it to the datastore.

  // Typically it's not kosher to send the entire datastore back to the client
  // in a POST request. Handle reading from the datastore with a GET request.
  res.send(newMessage);
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
