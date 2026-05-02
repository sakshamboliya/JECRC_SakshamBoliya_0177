import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [
    { id: 1, name: 'John Doe', role: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', role: 'Project Manager' },
    { id: 3, name: 'Bob Johnson', role: 'Designer' },
  ];

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find((emp) => emp.id === id);
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
  
  updateEmployee(id: number, updatedEmployee: any) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
  searchEmployees(keyword: string) {
    return this.employees.filter((emp) =>
      emp.name.toLowerCase().includes(keyword.toLowerCase()) || emp.role.toLowerCase().includes(keyword.toLowerCase())  
    );
  }
}
