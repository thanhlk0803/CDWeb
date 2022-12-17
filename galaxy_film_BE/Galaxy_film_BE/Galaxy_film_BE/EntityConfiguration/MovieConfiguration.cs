using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Galaxy_film_BE.EntityConfiguration
{
    public class MovieConfiguration : IEntityTypeConfiguration<Movie>
    {
        public void Configure(EntityTypeBuilder<Movie> builder)
        {
            builder.HasKey(m => m.ID);

            builder.Property(m => m.Name).IsRequired(false);
            builder.Property(m => m.MovieThreatres).IsRequired(false);
            builder.Property(m => m.MovieActors).IsRequired(false);
        }
    }
}
