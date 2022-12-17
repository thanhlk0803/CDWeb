using Galaxy_film_BE.Models;
using System;

namespace Galaxy_film_BE.DAL
{
    public class UnitOfWork : IDisposable
    {
        private GalaxyFilmContext context = new GalaxyFilmContext();
        private GenericRepository<Movie> movieRepository;

        public GenericRepository<Movie> MovieRepository
        {
            get
            {
                if (this.movieRepository == null)
                {
                    this.movieRepository = new GenericRepository<Movie>(context);
                }
                return movieRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}