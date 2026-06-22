import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📚 LMS</h2>

      <Link to="/">🏠 Dashboard</Link>
      <Link to="/books">📖 Books</Link>
      <Link to="/issue-book">📕 Issue Book</Link>
      <Link to="/issued-books">📋 Issued Books</Link>
    </div>
  );
}

export default Sidebar;