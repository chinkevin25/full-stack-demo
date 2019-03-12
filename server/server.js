// Begin by requiring the express module and initialize a new express application.
const express = require('express');

const app = express();

// Configure the port with app.set
app.set('port', process.env.PORT || 3000);

// Lastly, we use app.listen to bind our application to a port and have the application
// listen for incoming requests on that port number.
app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
