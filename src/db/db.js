const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://ykarn83_db_user:fbgKSQpz6qEWtA6E@bihar.3yijgbb.mongodb.net/day3")

     console.log("Connected to MongoDB successfully");
}

module.exports = connectDB;