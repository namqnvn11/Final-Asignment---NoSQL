const mongoose = require('mongoose');
const connDB = require('./config/db');
const Author = require('./models/author');
const Book = require('./models/book');
const Genre = require('./models/genre');
const Favorite = require('./models/favorite');

connDB();

const genres = [
  { name: 'Technology', description: 'Sách về công nghệ và máy tính' },
  { name: 'Fiction', description: 'Sách tiểu thuyết' },
  { name: 'Science', description: 'Sách khoa học' },
  { name: 'Self-help', description: 'Sách tự lực, phát triển bản thân' },
  { name: 'Business', description: 'Sách kinh doanh và quản lý' }
];

// Dữ liệu tác giả
const authors = [
  { first_name: 'Robert', last_name: 'Martin', country: 'USA', biography: 'Robert Cecil Martin là một kỹ sư phần mềm và tác giả người Mỹ.' },
  { first_name: 'Andrew', last_name: 'Hunt', country: 'USA', biography: 'Andrew Hunt là đồng tác giả của cuốn The Pragmatic Programmer.' },
  { first_name: 'Eric', last_name: 'Evans', country: 'UK', biography: 'Eric Evans là tác giả của Domain-Driven Design.' },
  { first_name: 'Martin', last_name: 'Fowler', country: 'UK', biography: 'Martin Fowler là một chuyên gia về kiến trúc phần mềm.' },
  { first_name: 'Steve', last_name: 'McConnell', country: 'USA', biography: 'Steve McConnell là một kỹ sư phần mềm và chuyên gia về quản lý dự án.' },
  { first_name: 'Haruki', last_name: 'Murakami', country: 'Japan', biography: 'Haruki Murakami là một nhà văn nổi tiếng người Nhật.' }
];

async function seedDatabase() {
  try {
    await Author.deleteMany({});
    await Book.deleteMany({});
    await Genre.deleteMany({});
    await Favorite.deleteMany({});

    console.log('Old data deleted');

    const savedGenres = await Genre.insertMany(genres);
    console.log('Added category');

    const technologyId = savedGenres.find(g => g.name === 'Technology')._id;
    const fictionId = savedGenres.find(g => g.name === 'Fiction')._id;
    const scienceId = savedGenres.find(g => g.name === 'Science')._id;
    const selfHelpId = savedGenres.find(g => g.name === 'Self-help')._id;
    const businessId = savedGenres.find(g => g.name === 'Business')._id;

    const savedAuthors = await Author.insertMany(authors);
    console.log('Added author');

    // Lấy ID các tác giả
    const robertMartinId = savedAuthors.find(a => a.last_name === 'Martin')._id;
    const andrewHuntId = savedAuthors.find(a => a.last_name === 'Hunt')._id;
    const ericEvansId = savedAuthors.find(a => a.last_name === 'Evans')._id;
    const martinFowlerId = savedAuthors.find(a => a.last_name === 'Fowler')._id;
    const steveMcConnellId = savedAuthors.find(a => a.last_name === 'McConnell')._id;
    const murakamiId = savedAuthors.find(a => a.last_name === 'Murakami')._id;

    const books = [
      {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: robertMartinId,
        genres: [technologyId],
        publishing_year: 2008,
        isbn: '9780132350884',
        description: 'Cuốn sách về cách viết mã sạch và dễ bảo trì'
      },
      {
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: robertMartinId,
        genres: [technologyId],
        publishing_year: 2011,
        isbn: '9780137081073',
        description: 'Cuốn sách về đạo đức nghề nghiệp của lập trình viên'
      },
      {
        title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
        author: robertMartinId,
        genres: [technologyId],
        publishing_year: 2017,
        isbn: '9780134494166',
        description: 'Cuốn sách về kiến trúc phần mềm'
      },
      {
        title: 'Clean Agile: Back to Basics',
        author: robertMartinId,
        genres: [technologyId],
        publishing_year: 2019,
        isbn: '9780135781869',
        description: 'Cuốn sách về phương pháp Agile'
      },
      {
        title: 'The Pragmatic Programmer: Your Journey to Mastery',
        author: andrewHuntId,
        genres: [technologyId],
        publishing_year: 1999,
        isbn: '9780201616224',
        description: 'Cuốn sách kinh điển về nghề lập trình'
      },
      {
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: ericEvansId,
        genres: [technologyId],
        publishing_year: 2003,
        isbn: '9780321125217',
        description: 'Cuốn sách về thiết kế hướng domain'
      },
      {
        title: 'Refactoring: Improving the Design of Existing Code',
        author: martinFowlerId,
        genres: [technologyId],
        publishing_year: 1999,
        isbn: '9780201485677',
        description: 'Cuốn sách về refactoring'
      },
      {
        title: 'Patterns of Enterprise Application Architecture',
        author: martinFowlerId,
        genres: [technologyId],
        publishing_year: 2002,
        isbn: '9780321127426',
        description: 'Cuốn sách về các mẫu kiến trúc ứng dụng doanh nghiệp'
      },
      {
        title: 'UML Distilled: A Brief Guide to the Standard Object Modeling Language',
        author: martinFowlerId,
        genres: [technologyId],
        publishing_year: 2003,
        isbn: '9780321193681',
        description: 'Cuốn sách về UML'
      },
      {
        title: 'Programming C# 8.0: Build Cloud, Web, and Desktop Applications',
        author: martinFowlerId,
        genres: [technologyId],
        publishing_year: 2019,
        isbn: '9781492056805',
        description: 'Cuốn sách về lập trình C# 8.0'
      },
      {
        title: 'DSL in Action: Domain-Specific Languages in Practice',
        author: martinFowlerId,
        genres: [technologyId],
        publishing_year: 2010,
        isbn: '9781935182450',
        description: 'Cuốn sách về ngôn ngữ chuyên biệt'
      },
      {
        title: 'Code Complete: A Practical Handbook of Software Construction',
        author: steveMcConnellId,
        genres: [technologyId],
        publishing_year: 2004,
        isbn: '9780735619678',
        description: 'Cuốn sách kinh điển về xây dựng phần mềm'
      },
      {
        title: 'Norwegian Wood',
        author: murakamiId,
        genres: [fictionId],
        publishing_year: 1987,
        isbn: '9780375704024',
        description: 'Tiểu thuyết nổi tiếng của Haruki Murakami'
      },
      {
        title: 'Kafka on the Shore',
        author: murakamiId,
        genres: [fictionId],
        publishing_year: 2002,
        isbn: '9781400079278',
        description: 'Tiểu thuyết siêu thực của Haruki Murakami'
      },
      {
        title: 'Advanced Programming in Java',
        author: steveMcConnellId,
        genres: [technologyId],
        publishing_year: 2023,
        isbn: '9780123456789',
        description: 'Cuốn sách về lập trình Java nâng cao, xuất bản năm nay'
      }
    ];

    const savedBooks = await Book.insertMany(books);
    console.log('Added books');

    const favorites = [
      { user_id: 'user1', book: savedBooks[0]._id },
      { user_id: 'user1', book: savedBooks[1]._id },
      { user_id: 'user2', book: savedBooks[0]._id },
      { user_id: 'user2', book: savedBooks[2]._id },
      { user_id: 'user3', book: savedBooks[0]._id },
      { user_id: 'user3', book: savedBooks[1]._id },
      { user_id: 'user3', book: savedBooks[4]._id },
      { user_id: 'user4', book: savedBooks[4]._id },
      { user_id: 'user5', book: savedBooks[12]._id },
      { user_id: 'user5', book: savedBooks[13]._id },
    ];

    await Favorite.insertMany(favorites);
    console.log('Added favorites');

    console.log('Added sample data successfully');
  } catch (err) {
    console.error('Error adding sample data:', err);
  } finally {
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedDatabase(); 