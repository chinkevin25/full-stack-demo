// Begin by requiring the express module and initialize a new express application.
const express = require('express');

const app = express();
// Configure the port with app.set
app.set('port', process.env.PORT || 3000);

app.get('/api/cohort/:cohort', (request, response) => {
  console.log(`Registered a ${request.method} at ${request.url}`);
  const cohort = request.params.cohort;
  const retort = ['113', '114', '107'].includes(cohort)
    ? `HRSF-${cohort} is the best`
    : `HRSF-${cohort} is the worst`;
  response.send(retort);
});

// Lastly, we use app.listen to bind our application to a port and have the application
// listen for incoming requests on that port number.
app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
