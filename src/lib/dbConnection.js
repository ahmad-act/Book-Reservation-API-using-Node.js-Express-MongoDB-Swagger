require('dotenv').config();
const messageLog = require('./messageLog');
const errorLog = require('./errorLog');
const mongoose = require("mongoose");

const connectDB = async (mongoDbUrl) => {
  try {
    const conn = await mongoose.connect(mongoDbUrl ?? process.env.MONGODB_URL, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useCreateIndex: true,
    });

    messageLog(`Connected To Database (${mongoose.connection.host})`);

    return conn;
  } catch (err) {
    errorLog("DB connection error", err);
  }
};

module.exports = connectDB;
