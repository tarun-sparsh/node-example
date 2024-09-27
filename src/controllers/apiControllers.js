const Book = require('../models/book');

exports.getBooks = (req, res) => {
  const books = Book.getAll();
  res.json(books);
};

exports.getBookById = (req, res) => {
  const book = Book.getById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

exports.createBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  const newBook = Book.create(title, author);
  res.status(201).json(newBook);
};
