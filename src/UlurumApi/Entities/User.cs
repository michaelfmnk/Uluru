using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("users")]
    public class User
    {
        [Key]
        [Column("user_id")]
        public int UserId { get; set; }
        
        [Column("login")]
        public string Email { get; set; }  
        
        [Column("first_name")]
        public string FirstName { get; set; }
        
        [Column("last_name")]
        public string LastName { get; set; }
        
        [Column("password")]
        public string Password { get; set; }
        
        [Column("last_password_reset_date")]
        public DateTime LastPasswordResetDate { get; set; }
        
        [Column("salt")]
        public string Salt { get; set; }

        [InverseProperty(nameof(Post.User))]
        public virtual ICollection<Post> Posts { get; set; }
        
        [InverseProperty(nameof(Subscription.Followed))]
        public virtual ICollection<Subscription> Followers { get; set; }
        
        [InverseProperty(nameof(Subscription.Follower))]
        public virtual ICollection<Subscription> Followed { get; set; }
        
        [Column("avatar_id")]
        public string AvatarId { get; set; }

    }
}
