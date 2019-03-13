# STEP 1: Creating a basic server

We will now install the necessary packages and create the necessary files for a basic server.

# Installing the necessary packages

To create the most basic server, we need to install `ExpressJS`:

`npm install express --save`

#### An aside on dependencies:
Running `npm i -S express` is the same as the above. `--save` adds the specified dependencies to our `package.json`. It is best practice to include all of the dependencies required for our program to run in our package.json. 

Libraries that are not function critical but are critical during the development process will be added to the developer dependencies by using `--save-dev` or `-D`.

# Creating the Server
First, let's follow the principle of separation of concerns and create the `server` folder. This folder will hold everything related servers including models, routes, templates, etc.

Within the `server` folder, create a `server.js` file.

We will then build the most basic server inside of `server.js`.

# Launching the server
Now that we have created the most basic server, we can launch the server by using:
node <filePath> or in this case node server/server.js if you are in the root directory.

Running the server in this manner, however, has some limitations, namely we will need to quit and restart the server everytime we make changes. To avoid this as we're developing, we can take advantage of `nodemon`, which functions similarly to the `node` command but will watch for changes and automatically restart the application whenever we save.

If `nodemon`has not been installed yet, install it globally by running `npm i -g nodemon`. The `-g` flag tells npm to install a package globally which will allow us to use the package from anywhere on our computer.
#

In the `step 2` we will add some basic functionality to our server.
