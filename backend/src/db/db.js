const mongoose = require("mongoose");

//mongoose.connect() is a method which is used to connect to the database and it returns a promise
async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connect to DataBase");
}

module.exports = connectDB;