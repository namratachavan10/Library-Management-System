import { useEffect, useState } from "react";
import API from "../services/api";

function IssuedBooks() {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  const fetchIssuedBooks = async () => {
    try {
      const res = await API.get("/issues");
      setIssuedBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Issued Books</h1>

      {issuedBooks.map((issue) => (
        <div key={issue._id}>
          {issue.studentName} - {issue.bookId?.title}
        </div>
      ))}
    </div>
  );
}

export default IssuedBooks;