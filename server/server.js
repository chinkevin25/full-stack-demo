const express = require('express');
const path = require('path');
// morgan is a HTTP request logger middleware for node.js. This helps log details of the requests
// that are being sent to the server. This is extremely useful to see if our server is responding
// correctly.
const morgan = require('morgan');
// cors is a useful library that helps handle our cross origin requests for us!
//  Refer to the documentation to see what options are available.
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, '../public')));
// Initialize morgan as a middleware in the 'dev' mode. Refer to the documentation for more details.
app.use(morgan('dev'));
// Initalize cors as a middleware in the default mode. This will enable CORS for all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is our GET route');
});

app.post('/', (req, res) => {
  res.send('This is our POST route');
});

app.put('/', (req, res) => {
  res.send('This is our UPDATE route');
});

app.delete('/', (req, res) => {
  res.send('This is our DELETE route');
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
