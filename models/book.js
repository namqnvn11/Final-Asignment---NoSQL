const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  genres: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }],
  publishing_year: {
    type: Number,
    required: true
  },
  isbn: {
    type: String
  },
  description: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', BookSchema); 