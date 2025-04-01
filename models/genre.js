const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Genre', GenreSchema, 'genres'); 