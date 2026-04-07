import { useState } from "react";
import { useEmployee } from "../context/EmployeeContext";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const { addEmployee } = useEmployee();

  const handleAdd = () => {
    addEmployee({ id: Date.now(), name });
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}