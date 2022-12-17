using System;

namespace Galaxy_film_BE.Interface
{
    public class BaseEntity
    {
        public Guid ID { get; set; }

        public DateTime UpdatedDate { get; set; }
        public DateTime DeleteDate { get; set; }
    }
}
