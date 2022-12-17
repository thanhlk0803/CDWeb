using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Galaxy_film_BE.EntityConfiguration
{
    public class MovieThreatreConfiguration : IEntityTypeConfiguration<MovieThreatre>
    {
        public void Configure(EntityTypeBuilder<MovieThreatre> builder)
        {
            builder.HasKey(mt => mt.ID);

        }
    }
}
