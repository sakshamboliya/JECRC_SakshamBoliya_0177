using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Json;
using EMSMVC.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EMSMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HomeController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        // 🔹 READ
        public async Task<IActionResult> Index()
        {
            var client = _httpClientFactory.CreateClient("EmployeeApi");
            List<Employee> data = new();

            try
            {
                data = await client.GetFromJsonAsync<List<Employee>>("api/employee") ?? new List<Employee>();
            }
            catch
            {
                ViewBag.ErrorMessage = "API not reachable";
            }

            return View(data);
        }

        // 🔹 CREATE (GET)
        public IActionResult Create()
        {
            return View();
        }

        // 🔹 CREATE (POST)
        [HttpPost]
        public async Task<IActionResult> Create(Employee emp)
        {
            var client = _httpClientFactory.CreateClient("EmployeeApi");
            await client.PostAsJsonAsync("api/employee", emp);
            return RedirectToAction("Index");
        }

        // 🔹 EDIT (GET)
        public async Task<IActionResult> Edit(int id)
        {
            var client = _httpClientFactory.CreateClient("EmployeeApi");
            var emp = await client.GetFromJsonAsync<Employee>($"api/employee/{id}");
            return View(emp);
        }

        // 🔹 EDIT (POST)
        [HttpPost]
        public async Task<IActionResult> Edit(Employee emp)
        {
            var client = _httpClientFactory.CreateClient("EmployeeApi");
            await client.PutAsJsonAsync($"api/employee/{emp.Id}", emp);
            return RedirectToAction("Index");
        }

        // 🔹 DELETE
        public async Task<IActionResult> Delete(int id)
        {
            var client = _httpClientFactory.CreateClient("EmployeeApi");
            await client.DeleteAsync($"api/employee/{id}");
            return RedirectToAction("Index");
        }
    }
}