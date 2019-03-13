const express = require('express');
// import path so we can use the library to help us handle the creation of paths.
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

// This allows us to serve our static files in public (html, images, js files, bundle.js) easily
// The assets will be sent whenever there is a request to the endpoint '/'.
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/cohort/:cohort', (request, response) => {
  console.log(`Registered a ${request.method} at ${request.url}`);
  const cohort = request.params.cohort;
  const retort = ['113', '114', '107'].includes(cohort)
    ? `HRSF-${cohort} is the best`
    : `HRSF-${cohort} is the worst`;
  response.send(retort);
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
