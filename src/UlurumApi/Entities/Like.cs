using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("likes")]
    public class Like
    {
        [Column("user_id")]
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
        
        [Column("post_id")]
        public int PostId { get; set; }
        [ForeignKey(nameof(PostId))]
        public virtual Post Post { get; set; }

    }
}