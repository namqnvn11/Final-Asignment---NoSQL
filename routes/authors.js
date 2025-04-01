const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);

router.get('/with-at-least-five-books', authorController.getAuthorsWithAtLeastFiveBooks);

module.exports = router; 