import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext();

export const useEmployee = () => useContext(EmployeeContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map(emp =>
        emp.id === action.payload.id ? action.payload : emp
      );

    case "DELETE":
      return state.filter(emp => emp.id !== action.payload);

    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(reducer, []);

  const addEmployee = (emp) =>
    dispatch({ type: "ADD", payload: emp });

  const updateEmployee = (emp) =>
    dispatch({ type: "UPDATE", payload: emp });

  const deleteEmployee = (id) =>
    dispatch({ type: "DELETE", payload: id });

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};