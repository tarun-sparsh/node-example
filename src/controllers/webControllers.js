const Book = require('../models/book');

exports.renderHomePage = (req, res) => {
  const books = Book.getAll();
  res.render('layouts/main', { page: '../pages/home', books });
};