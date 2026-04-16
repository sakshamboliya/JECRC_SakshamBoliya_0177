using Microsoft.AspNetCore.Mvc;
using ShirtApp.Models;

namespace ShirtApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShirtController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreateShirt([FromBody] Shirt shirt)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok("Shirt created successfully");
        }
    }
}