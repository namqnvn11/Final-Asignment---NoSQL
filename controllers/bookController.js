const Book = require('../models/book');
const Favorite = require('../models/favorite');
const Genre = require('../models/genre');
const mongoose = require('mongoose');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate('author')
      .populate('genres');
    
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBooksCreatedThisYear = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

    const books = await Book.find({
      created_at: {
        $gte: startOfYear,
        $lte: endOfYear
      }
    }).populate('author').populate('genres');
    
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProgrammingTechBooks = async (req, res) => {
  try {
    const techGenre = await Genre.findOne({ name: 'Technology' });
    if (!techGenre) {
      return res.status(404).json({ message: 'Technology genre not found' });
    }

    const books = await Book.find({
      title: { $regex: /programming/i },
      genres: techGenre._id
    }).populate('author').populate('genres');
    
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBooksWithFavorites = async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    
    const booksWithFavorites = await Promise.all(books.map(async (book) => {
      const numOfFavorites = await Favorite.countDocuments({ book: book._id });
      
      return {
        id: book._id,
        title: book.title,
        author_full_name: `${book.author.first_name} ${book.author.last_name}`,
        publishing_year: book.publishing_year,
        num_of_favorites: numOfFavorites
      };
    }));
    
    res.json(booksWithFavorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 