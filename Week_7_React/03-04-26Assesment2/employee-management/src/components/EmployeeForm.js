import { useState } from "react";

const EmployeeForm = ({ onSubmit, existing }) => {
  const [name, setName] = useState(existing?.name || "");
  const [email, setEmail] = useState(existing?.email || "");

  const handleSubmit = () => {
    if (!name || !email) {
      alert("All fields required");
      return;
    }

    onSubmit({ name, email });

    setName("");
    setEmail("");
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn-success" onClick={handleSubmit}>
        {existing ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default EmployeeForm;