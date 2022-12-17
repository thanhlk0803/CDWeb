using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Galaxy_film_BE.EntityConfiguration
{
    public class ActorConfiguration : IEntityTypeConfiguration<Actor>
    {
        public void Configure(EntityTypeBuilder<Actor> builder)
        {
            builder.HasKey(a => a.ID);

            builder.Property(a => a.FirstName).IsRequired(false);
            builder.Property(a => a.LastName).IsRequired(false);

        }
    }
}
