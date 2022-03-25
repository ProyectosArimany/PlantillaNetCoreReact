using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Plantilla.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoldeController : ControllerBase
    {
        // GET: api/MoldeController
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("");
        }

        // GET api/MoldeController/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok($"{id}");
        }

        // GET api/MoldeController?id=5
        [HttpGet()]
        public IActionResult GetById(int id)
        {
            return Ok($"{id}");
        }

        // POST api/MoldeController
        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok("");
        }

        // PUT api/MoldeController/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            return Ok("");
        }

        // DELETE api/MoldeController/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok("");
        }

        // DELETE api/MoldeController/byId?id=5
        [HttpDelete(), EndpointName("byId")]
        public IActionResult DeleteById(int id)
        {
            return Ok("");
        }
    }
}
