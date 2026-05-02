using Microsoft.AspNetCore.Mvc;
using LeaveAPI.Data;
using LeaveAPI.Models;
using System.Linq;

namespace LeaveAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        // GET ALL
        [HttpGet]
        public IActionResult GetAll()
        {
            var employees = _context.Employees.ToList();
            return Ok(employees);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var emp = _context.Employees.Find(id);
            if (emp == null) return NotFound();
            return Ok(emp);
        }

        // CREATE
        [HttpPost]
        public IActionResult Create(Employee emp)
        {
            _context.Employees.Add(emp);
            _context.SaveChanges();
            return Ok(emp);
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult Update(int id, Employee updated)
        {
            var emp = _context.Employees.Find(id);
            if (emp == null) return NotFound();

            emp.Name = updated.Name;
            emp.Email = updated.Email;
            emp.Department = updated.Department;
            emp.Salary = updated.Salary;

            _context.SaveChanges();
            return Ok(emp);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = _context.Employees.Find(id);
            if (emp == null) return NotFound();

            _context.Employees.Remove(emp);
            _context.SaveChanges();
            return Ok();
        }
    }
}