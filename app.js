const express = require('express');
const mongoose = require('mongoose');
const connDB = require('./config/db');
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');

const app = express();
app.use(express.json());

connDB();

app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app; 