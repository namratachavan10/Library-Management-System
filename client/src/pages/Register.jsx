import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />
        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;