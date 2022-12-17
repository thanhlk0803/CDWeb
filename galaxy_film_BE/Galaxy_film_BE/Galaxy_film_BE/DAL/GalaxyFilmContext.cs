using Galaxy_film_BE.EntityConfiguration;
using Galaxy_film_BE.Models;
using Microsoft.EntityFrameworkCore;

namespace Galaxy_film_BE.DAL
{
    public class GalaxyFilmContext : DbContext
    {
        public GalaxyFilmContext(DbContextOptions<GalaxyFilmContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new MovieConfiguration());

            builder.ApplyConfiguration(new MovieActorConfiguration());

            builder.ApplyConfiguration(new ActorConfiguration());

            builder.ApplyConfiguration(new RateConfiguration());

            builder.ApplyConfiguration(new ThreatreConfiguration());

            builder.ApplyConfiguration(new ThreatreConfiguration());
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieActor> MovieActors { get; set; }
        public DbSet<MovieThreatre> MovieThreatres { get; set; }
        public DbSet<Rating> Rates { get; set; }
        public DbSet<Threatre> Threatres { get; set; }
    }
}
