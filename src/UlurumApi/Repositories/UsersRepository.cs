using System.Linq;
using Microsoft.EntityFrameworkCore.Internal;
using UlurumApi.Entities;
using UlurumApi.Exceptions;

namespace UlurumApi.Repositories
{
    public class UsersRepository
    {
        
        private readonly ApiContext _dbContext;

        public UsersRepository(ApiContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User GetById(int userId)
        {
            var user = _dbContext.Users.Find(userId);
            return user ?? throw new EntityNotFoundException("not found");
        }

        public User GetByEmail(string email)
        {
            var user =  _dbContext.Users.FirstOrDefault(u => u.Email == email.ToLower());
            return user ?? throw new EntityNotFoundException("not found");
        }

        public bool ExistsByEmail(string email) => _dbContext.Users.Any(u => u.Email == email);

        public User Save(User user)
        {
            user = _dbContext.Users.Add(user).Entity;
            _dbContext.SaveChanges();
            return user;
        }
    }
}
