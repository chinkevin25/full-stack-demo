const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

// Creating routes

// Here we create a GET route with an endpoint with a relative URL of 
// '/api/cohort/113'
app.get('/api/cohort/:cohort', (request, response) => {
  console.log(`Registered a ${request.method} at ${request.url}`);

  // Notice that there is a :cohort in the URL
  // This is called a route parameter and this will be parsed by express
  // and added as a key-value pair on the request object. This is one method
  // to pass information along.

  const cohort = request.params.cohort;
  const retort = ['113', '114', '107'].includes(cohort)
    ? `HRSF-${cohort} is the best`
    : `HRSF-${cohort} is the worst`;
  response.send(retort);
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
