import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";


function Navbar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>📚 Library Management System</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/" style={linkStyle}>
          <DashboardIcon /> Dashboard
        </Link>

        <Link to="/books" style={linkStyle}>
          <MenuBookIcon /> Books
        </Link>

        <Link to="/issue-book" style={linkStyle}>
          <AssignmentIcon /> Issue Book
        </Link>

        <Link to="/issued-books" style={linkStyle}>
          <AssignmentIcon /> Issued Books
        </Link>

        <Link to="/admin" style={linkStyle}>
          <AssignmentIcon /> Admin Profile
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  borderRadius: "8px",
  background: "#334155",
};

export default Navbar;