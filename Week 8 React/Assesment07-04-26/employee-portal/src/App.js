import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {!user ? <Login /> : <Home />}
    </div>
  );
}

export default App;
