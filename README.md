# STEP 3: Creating the client

Let's now create a simple client. Lets create a `public` folder with an extremely barebone `index.html` file that will be served up by our server.

Once we serve our static assets that live in the public folder with `express.static()` we can type `localhost:3000` in our browser and the `index.html` page will be displayed!

We now technically have a client and a server that are connected! But this is not a very interesting application. Let's make this more interesting in the `Step 4` by introducing React.