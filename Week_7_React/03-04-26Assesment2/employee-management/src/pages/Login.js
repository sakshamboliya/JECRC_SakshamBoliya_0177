import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("employee");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) {
      alert("Enter username");
      return;
    }

    login(username, role);

    if (role === "admin") navigate("/admin");
    else navigate("/employee");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>

      <button className="btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;