import { useEffect, useState } from "react";
import API from "../services/api";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await API.put(`/books/${editingId}`, form);
        alert("Book Updated Successfully");
        setEditingId(null);
      } else {
        await API.post("/books", form);
        alert("Book Added Successfully");
      }

      setForm({
        title: "",
        author: "",
        category: "",
        quantity: "",
      });

      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const editBook = (book) => {
    setForm({
      title: book.title,
      author: book.author,
      category: book.category,
      quantity: book.quantity,
    });

    setEditingId(book._id);
  };

  const deleteBook = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      alert("Book Deleted Successfully");
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>📚 Library Books</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          placeholder="Book Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: e.target.value })
          }
        />

        <button type="submit">
          {editingId ? "Update Book" : "Add Book"}
        </button>
      </form>

      <hr />

      {/* SEARCH */}
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Book by Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CARDS */}
      <div className="book-grid">
        {books
          .filter((book) =>
            book.title
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((book) => (
            <div className="book-card" key={book._id}>
              <h3>{book.title}</h3>

              <p><b>Author:</b> {book.author}</p>
              <p><b>Category:</b> {book.category}</p>
              <p><b>Quantity:</b> {book.quantity}</p>

              <div className="book-actions">
                <button
                  className="edit-btn"
                  onClick={() => editBook(book)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Books;