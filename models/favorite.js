const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Favorite', FavoriteSchema); 