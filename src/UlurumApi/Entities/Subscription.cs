using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("subscriptions")]
    public class Subscription
    {
        [Column("follower_user_id")]
        public int FollowerUserId { get; set; }
        [ForeignKey(nameof(FollowerUserId))]
        public virtual User Follower { get; set; }
        
        [Column("followed_user_id")]
        public int FollowedUserId { get; set; }
        [ForeignKey(nameof(FollowedUserId))]
        public virtual User Followed { get; set; }
    }
}
