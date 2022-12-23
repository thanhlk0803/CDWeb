using Galaxy_film_BE.DAL;
using Galaxy_film_BE.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Galaxy_film_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IGenericRepository<Movie> movieRepository;

        public MovieController(IGenericRepository<Movie> movieRepository)
        {
            this.movieRepository = movieRepository;
        }

        // GET api/<MovieController>/5
        [HttpGet("{id}")]
        public IEnumerable<Movie> Get(int id)
        {
            return movieRepository.GetAll();
        }

        // POST api/<MovieController>
        [HttpPost]
        public void Post([FromBody] Movie movie)
        {
            movieRepository.Insert(movie);
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void Put([FromBody] Movie movie)
        {
            movieRepository.Update(movie);
        }

        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            movieRepository.Delete(id);
        }
    }
}
