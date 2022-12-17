using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Galaxy_film_BE.EntityConfiguration
{
    public class ThreatreConfiguration : IEntityTypeConfiguration<Threatre>
    {
        public void Configure(EntityTypeBuilder<Threatre> builder)
        {
            builder.HasKey(t => t.ID);

            builder.Property(t => t.Name).IsRequired(false);
            builder.Property(t => t.Address).IsRequired(false);
        }
    }
}
