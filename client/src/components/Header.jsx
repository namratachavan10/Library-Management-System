function Header() {
  return (
    <div
  style={{
    cursor: "pointer",
    fontWeight: "bold",
    color: "#2563eb",
  }}
  onClick={() => alert("Admin Profile")}
>
  👤 Admin
</div>
  );
}

export default Header;