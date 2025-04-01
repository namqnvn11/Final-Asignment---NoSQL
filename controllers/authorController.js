const Author = require('../models/author');
const Book = require('../models/book');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAuthorsWithAtLeastFiveBooks = async (req, res) => {
  try {
    const authorsWithBookCount = await Book.aggregate([
      { $group: { _id: '$author', bookCount: { $sum: 1 } } },
      { $match: { bookCount: { $gte: 5 } } }
    ]);

    if (authorsWithBookCount.length === 0) {
      return res.json([]);
    }
    
    const authorIds = authorsWithBookCount.map(item => item._id);
    
    const authors = await Author.find({ _id: { $in: authorIds } });
    
    const result = authors.map(author => {
      const authorWithCount = authorsWithBookCount.find(
        item => item._id.toString() === author._id.toString()
      );
      
      return {
        ...author.toObject(),
        bookCount: authorWithCount.bookCount
      };
    });
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 