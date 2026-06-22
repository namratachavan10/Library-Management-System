const mongoose = require("mongoose");

const issueBookSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },

  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },

  issueDate: {
    type: Date,
    default: Date.now,
  },

  returned: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(
  "IssueBook",
  issueBookSchema
);