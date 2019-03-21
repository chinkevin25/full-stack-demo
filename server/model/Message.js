// Require our ODM again so we can use it to make our schema
const mongoose = require('mongoose');

// Here we define the schema for our messages collection
const messageSchema = mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

// The first argument for mongoose.model will be the singular form
// of the collection the model is for. Mongoose will automatically
// find the plural form and make that the collection name.
const Message = mongoose.model('message', messageSchema);
/*
 * But what is a Mongoose Model?
 * -----------------------------
 * A Mongoose Model is just a fancy name for a document constructor.
 * An instance of a model is called a document and a document is analogous
 * to a row in a SQL database.
 *
 * So in the example above Messages can be viewed as a class that creates
 * documents. This will be what we use to interact with our mongo database at
 * the document level.
 */

// Finally we need to export the model so we can use it later.
module.exports = Message;
