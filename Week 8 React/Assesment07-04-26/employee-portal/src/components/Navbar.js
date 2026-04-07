import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      background: "#ccc"
    }}>
      <h3>Employee Portal</h3>

      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Theme: {theme}
        </button>

        {user && (
          <button onClick={() => setUser(null)}>Logout</button>
        )}
      </div>
    </div>
  );
}