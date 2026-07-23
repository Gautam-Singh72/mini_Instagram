const mongoose = require("mongoose");

//schema is a blueprint of the collection in database which defines the structure of the documents in that collection
const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

//model is a constructor function which creates a new collection in database and also provides us with methods to perform crud operations on that collection
const postModel = mongoose.model("post", postSchema); //"post" is the name of collection in database and postSchema is the schema for that collection

module.exports = postModel;