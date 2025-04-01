db.books.createIndex({ title: 1 });

const currentYear = new Date().getFullYear();
const startOfYear = new Date(currentYear, 0, 1);
const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

db.books.find({
  created_at: {
    $gte: startOfYear,
    $lte: endOfYear
  }
});

db.books.aggregate([
  { $group: { _id: '$author', bookCount: { $sum: 1 } } },
  { $match: { bookCount: { $gte: 5 } } },
  { $lookup: {
      from: 'authors',
      localField: '_id',
      foreignField: '_id',
      as: 'author_details'
    }
  },
  { $unwind: '$author_details' },
  { $project: {
      _id: 0,
      author: '$author_details',
      bookCount: 1
    }
  }
]);

const techGenreId = db.genres.findOne({ name: 'Technology' })._id;

db.books.find({
  title: { $regex: /programming/i },
  genres: techGenreId
});

db.books.aggregate([
  { $lookup: {
      from: 'authors',
      localField: 'author',
      foreignField: '_id',
      as: 'author_details'
    }
  },
  { $unwind: '$author_details' },
  { $lookup: {
      from: 'favorites',
      localField: '_id',
      foreignField: 'book',
      as: 'favorites'
    }
  },
  { $project: {
      _id: 1,
      title: 1,
      author_full_name: { $concat: ['$author_details.first_name', ' ', '$author_details.last_name'] },
      publishing_year: 1,
      num_of_favorites: { $size: '$favorites' }
    }
  }
]); 