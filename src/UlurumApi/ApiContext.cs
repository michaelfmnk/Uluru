using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UlurumApi.Entities;

namespace UlurumApi
{
    public class ApiContext : DbContext    {
        private IConfiguration Configuration { get; }
        
        public ApiContext(DbContextOptions<ApiContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Like> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subscription>().HasKey(sub => new {sub.FollowedUserId, sub.FollowerUserId});
            modelBuilder.Entity<Like>().HasKey(like => new {like.UserId, like.PostId});
            base.OnModelCreating(modelBuilder);
        }
    }
}
