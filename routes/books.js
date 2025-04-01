const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);

router.get('/created-this-year', bookController.getBooksCreatedThisYear);

router.get('/programming-tech', bookController.getProgrammingTechBooks);

router.get('/with-favorites', bookController.getBooksWithFavorites);

module.exports = router; 