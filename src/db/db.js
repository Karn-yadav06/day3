const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("/day3")

     console.log("Connected to MongoDB successfully");
}

module.exports = connectDB;
