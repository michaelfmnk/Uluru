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

        public Post FindById(int id)
        {
            var post = _dbContext.Posts.Find(id);
            if (post == null)
            {
                throw new EntityNotFoundException("Post not found");
            }

            return post;
        }

        public void Save(Post post)
        {
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
        }

        public void Persist()
        {
            _dbContext.SaveChanges();
        }

        public void Delete(Post post)
        {
            _dbContext.Posts.Remove(post);
        }
    }
}
