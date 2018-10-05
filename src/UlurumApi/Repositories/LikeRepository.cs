using UlurumApi.Entities;

namespace UlurumApi.Repositories
{
    public class LikeRepository
    {
        private readonly ApiContext _dbContext;

        public LikeRepository(ApiContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Save(Like entity)
        {
            _dbContext.Likes.Add(entity);
            _dbContext.SaveChanges();
        }
    }
}