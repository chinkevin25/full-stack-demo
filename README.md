# STEP 3: Setting up React

We will be using Babel and Webpack to transpile and bundle our extremely simple front-end. This walkthrough will not go into the details of Webpack but there are very great getting started guides located in the offical docs [here](https://webpack.js.org/guides/getting-started/).

# Installing the require dependencies
To get this to work we need to install a few packages. We can run
```sh
npm i -S react react-dom
```
```sh
npm i -D webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
```
> TIP: We can install multiple packages at once by separating them with spaces.

# webpack.config.js
Now that we have all of our dependencies, we need to create our `webpack.config.js` file.