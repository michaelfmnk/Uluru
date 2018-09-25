using Microsoft.EntityFrameworkCore;
using UlurumApi.Entities;

namespace UlurumApi
{
    public class ApiContext : DbContext    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
