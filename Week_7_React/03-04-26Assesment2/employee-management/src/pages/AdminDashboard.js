import { useEmployee } from "../context/EmployeeContext";
import EmployeeForm from "../components/EmployeeForm";
import { useState } from "react";

const AdminDashboard = () => {
  const { employees, addEmployee, deleteEmployee, updateEmployee } =
    useEmployee();

  const [editId, setEditId] = useState(null);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <EmployeeForm
        onSubmit={(data) => {
          if (editId) {
            updateEmployee(editId, data);
            setEditId(null);
          } else {
            addEmployee(data);
          }
        }}
        existing={employees.find((e) => e.id === editId)}
      />

      {employees.map((emp) => (
        <div className="employee-card" key={emp.id}>
          <span>
            {emp.name} - {emp.email}
          </span>

          <div>
            <button
              className="btn-warning"
              onClick={() => setEditId(emp.id)}
            >
              Edit
            </button>

            <button
              className="btn-danger"
              onClick={() => deleteEmployee(emp.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;