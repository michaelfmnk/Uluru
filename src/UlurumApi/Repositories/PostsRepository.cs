using System.Linq;
using UlurumApi.Entities;
using UlurumApi.Exceptions;


namespace UlurumApi.Repositories
{
    public class PostsRepository
    {
        private readonly ApiContext _dbContext;

        public PostsRepository(ApiContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Save(Post post)
        {
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
        }
    }
}
