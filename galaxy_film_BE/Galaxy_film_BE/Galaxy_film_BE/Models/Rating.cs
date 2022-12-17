using Galaxy_film_BE.Interface;
using System;

namespace Galaxy_film_BE.Models
{
    public class Rating : BaseEntity
    {
        public int Rate { get; set; }
        public string Content { get; set; }
    }
}
