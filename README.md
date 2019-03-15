# STEP 6: Refactoring and creating a more sophisticated application

Let's refactor our application so we can demonstrate a more complex application.

Many applications we build will need to support CRUD operations. CRUD stands for 

**C**reate: Creating something (POST)

**R**ead: Read something (GET)

**U**pdate: Update something (PUT/PATCH)

**D**elete: Delete something (DELETE)

Let's refactor our server to support these routes. While were are refactoring, let's introduce some popular and useful libraries.

# Useful libraries

```sh
npm i -S morgan cors
```

`morgan` is a library that helps us log incoming HTTP requests. The documentation can be found [here](https://www.npmjs.com/package/morgan).

`cors` is a library that helps us manage our cross origin request permissions. The documentation can be found [here](https://www.npmjs.com/package/cors)