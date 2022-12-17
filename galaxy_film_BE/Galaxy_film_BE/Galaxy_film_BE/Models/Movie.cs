using Galaxy_film_BE.Interface;
using System;
using System.Collections.Generic;

namespace Galaxy_film_BE.Models
{
    public class Movie : BaseClass
    {
        public string Name { get; set; }
        public DateTime ProducedYear { get; set; }

        public ICollection<MovieActor> MovieActors { get; set; }
        public ICollection<MovieThreatre> MovieThreatres { get; set; }
    }
}
