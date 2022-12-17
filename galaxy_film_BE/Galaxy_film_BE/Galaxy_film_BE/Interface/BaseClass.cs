using System;

namespace Galaxy_film_BE.Interface
{
    public class BaseClass
    {
        public Guid ID { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public DateTime DeleteDate { get; set; }
    }
}
