function AdminProfile() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Profile</h1>

      <h3>Name : Admin</h3>
      <h3>Email : admin@gmail.com</h3>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminProfile;