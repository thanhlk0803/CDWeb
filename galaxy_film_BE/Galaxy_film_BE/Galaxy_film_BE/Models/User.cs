using Galaxy_film_BE.Interface;
using System;

namespace Galaxy_film_BE.Models
{
    public class User : BaseEntity
    {
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public string Password { get; set; }
    }
}
