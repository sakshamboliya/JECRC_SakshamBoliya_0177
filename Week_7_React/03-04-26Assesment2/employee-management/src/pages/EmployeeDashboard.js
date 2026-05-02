import { useAuth } from "../context/AuthContext";
import { useEmployee } from "../context/EmployeeContext";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const { employees } = useEmployee();

  const myData = employees.filter((e) => e.name === user.username);

  return (
    <div className="container">
      <h2>Employee Dashboard</h2>

      {myData.length === 0 ? (
        <p>No data</p>
      ) : (
        myData.map((emp) => (
          <div className="employee-card" key={emp.id}>
            {emp.name} - {emp.email}
          </div>
        ))
      )}
    </div>
  );
};

export default EmployeeDashboard;