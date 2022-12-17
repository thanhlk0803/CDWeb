using Galaxy_film_BE.Interface;
using System;

namespace Galaxy_film_BE.Models
{
    public class MovieThreatre : BaseClass 
    {
        public Guid ThreatreID { get; set; }
        public Threatre Threatre { get; set; }

        public Guid MovieID { get; set; }
        public Movie Movie { get; set; }
    }
}
