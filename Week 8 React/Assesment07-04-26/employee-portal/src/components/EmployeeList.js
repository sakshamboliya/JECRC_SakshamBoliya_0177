import { useEmployee } from "../context/EmployeeContext";

export default function EmployeeList() {
  const { employees, deleteEmployee } = useEmployee();

  return (
    <div>
      {employees.map(emp => (
        <div key={emp.id}>
          {emp.name}
          <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}