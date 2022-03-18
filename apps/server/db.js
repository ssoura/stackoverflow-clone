const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('./utils/config');

const connectToDB = async () => {
  try {
    await mongoose.connect(url, {});

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
