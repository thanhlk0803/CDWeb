using Galaxy_film_BE.Interface;
using System;

namespace Galaxy_film_BE.Models
{
    public class Actor :BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
