import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import IssueBook from "./pages/IssueBook";
import IssuedBooks from "./pages/IssuedBooks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminProfile from "./pages/AdminProfile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login & Register Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Application */}
        <Route
          path="*"
          element={
            <div style={{ display: "flex" }}>
              <Navbar />

              <div
                style={{
                  flex: 1,
                  padding: "20px",
                }}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/issue-book" element={<IssueBook />} />
                  <Route path="/issued-books" element={<IssuedBooks />} />
                  <Route path="/admin" element={<AdminProfile />} />
                </Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;