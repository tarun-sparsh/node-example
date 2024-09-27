const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook } = require('../../controllers/apiControllers');

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);

module.exports = router;