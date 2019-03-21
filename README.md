# STEP 7: Adding Persistent Storage with MongoDB

Let's create a database file `db.js`. This will be the file we use to connect to the database.

We also need to then define our schema. Separate our schema out into another folder called `model`.
The model folder will contain the files that our application will use to interact with the database.

For our application we only `Message` model but for more complex applications, we may require more. Let's follow best practices and create an `index.js` which will act as our model entry point. This allows us to interact with _only_ the `index.js`.

Although our application works right now, we are violating some best practices. Let's refactor in the next step to follow best practices.