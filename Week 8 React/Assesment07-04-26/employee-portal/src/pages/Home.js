import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <h2>Welcome {user?.name}</h2>

      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}