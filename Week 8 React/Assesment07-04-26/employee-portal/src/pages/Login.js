import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}