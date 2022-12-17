using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Galaxy_film_BE.EntityConfiguration
{
    public class RateConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder.HasKey(r => r.ID);

            builder.Property(r => r.Rate).IsRequired(false);
            builder.Property(r => r.Content).IsRequired(false);
        }
    }
}
