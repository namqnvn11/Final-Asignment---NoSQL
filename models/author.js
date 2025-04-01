const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date
  },
  country: {
    type: String
  },
  biography: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

AuthorSchema.virtual('full_name').get(function() {
  return `${this.first_name} ${this.last_name}`;
});

AuthorSchema.set('toJSON', { virtuals: true });
AuthorSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Author', AuthorSchema); 