import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <button onClick={logout}>Logout</button>
      <button onClick={toggleTheme}>Theme: {theme}</button>
    </div>
  );
}