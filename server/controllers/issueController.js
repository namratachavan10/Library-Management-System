const IssueBook = require("../models/IssueBook");

exports.issueBook = async (req, res) => {
  try {
    const issue = await IssueBook.create(req.body);

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getIssuedBooks = async (req, res) => {
  try {
    const books = await IssueBook.find()
      .populate("bookId");

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const issue = await IssueBook.findByIdAndUpdate(
      req.params.id,
      { returned: true },
      { new: true }
    );

    res.json(issue);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};