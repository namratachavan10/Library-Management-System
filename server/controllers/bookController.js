const Book = require("../models/Book");

// Add Book
exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All Books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};
// Update Book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};
// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};
