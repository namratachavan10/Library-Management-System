import { useEffect, useState } from "react";
import API from "../services/api";

function IssueBook() {
  const [books, setBooks] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const issueBook = async (e) => {
    e.preventDefault();

    try {
      await API.post("/issues", {
        studentName,
        bookId,
      });

      alert("Book Issued Successfully");

      setStudentName("");
      setBookId("");
    } catch (error) {
      console.log(error);
      alert("Error Issuing Book");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Issue Book</h1>

      <form onSubmit={issueBook}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) =>
            setStudentName(e.target.value)
          }
        />

        <br /><br />

        <select
          value={bookId}
          onChange={(e) =>
            setBookId(e.target.value)
          }
        >
          <option value="">
            Select Book
          </option>

          {books.map((book) => (
            <option
              key={book._id}
              value={book._id}
            >
              {book.title}
            </option>
          ))}
        </select>

        <br /><br />

        <button type="submit">
          Issue Book
        </button>
      </form>
    </div>
  );
}

export default IssueBook;