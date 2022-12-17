using System;

namespace Galaxy_film_BE.Models
{
    public class User
    {
        public Guid ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public string Password { get; set; }
    }
}
