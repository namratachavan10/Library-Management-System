const Book = require("../models/Book");
const IssueBook = require("../models/IssueBook");

exports.getDashboard = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();

    const issuedBooks = await IssueBook.countDocuments({
      returned: false,
    });

    const returnedBooks = await IssueBook.countDocuments({
      returned: true,
    });

    res.json({
      totalBooks,
      issuedBooks,
      returnedBooks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};