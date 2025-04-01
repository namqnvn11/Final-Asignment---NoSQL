const mongoose = require("mongoose");

const connDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/BooksStore');
    console.log('Connected to MongoDB');
    
    await mongoose.connection.db.collection('books').createIndex({ title: 1 });
    console.log('Created index on title field in books collection');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connDB; 