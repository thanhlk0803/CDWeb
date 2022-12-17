using Galaxy_film_BE.Interface;
using System;

namespace Galaxy_film_BE.Models
{
    public class MovieActor : BaseClass
    {
        public Guid ActorID { get; set; }
        public Actor Actor { get; set; }

        public Guid MovieID { get; set; }
        public Movie Movie { get; set; }
    }
}
