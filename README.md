# STEP 1: Creating a basic server

We will now install the necessary packages and create the necessary files for a basic server.

# Installing the necessary packages

To create the most basic server, we need to install `ExpressJS`:

`npm install express --save`

As of `npm` version 5 we no longer need to use --save to save dependencies. We still need to use `--save-dev` or `-D` for developer dependencies.

Use `npm --version` to check npm versions.

#### An aside on dependencies:
Running `npm i -S express` is the same as the above. `--save` adds the specified dependencies to our `package.json`. It is best practice to include all of the dependencies required for our program to run in our package.json. 

Libraries that are not function critical but are critical during the development process will be added to the developer dependencies by using `--save-dev` or `-D`.

# Creating the Server
First, let's follow the principle of separation of concerns and create the `server` folder. This folder will hold everything related servers including models, routes, templates, etc.

Within the `server` folder, create a `server.js` file.

We will then build the most basic server inside of `server.js`.

# Launching the server
Now that we have created the most basic server, we can launch the server by using:
`node <filePath>` or in this case `node server/server.js`.

As we're developing our server, we can take advantage of `nodemon`. If `nodemon` has not been installed yet, install it globally by running `npm install -g nodemon`. We can then start the server in development mode with `nodemon server/server.js`.
#

In the `step 2` we will add some basic functionality to our server.
