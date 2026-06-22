const express = require("express");

const router = express.Router();

const {
  issueBook,
  getIssuedBooks,
  returnBook,
} = require("../controllers/issueController");

router.post("/", issueBook);
router.get("/", getIssuedBooks);
router.put("/:id", returnBook);

module.exports = router;