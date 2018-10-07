using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("comments")]
    public class Comment
    {
        [Key, Column("comment_id")]
        public int CommentId { get; set; }
        [Column("post_id")]
        public int PostId { get; set; }
        [ForeignKey(nameof(PostId))]
        public virtual Post Post { get; set; }
        [Column("content")]
        public string Content { get; set; }
        [Column("date")]
        public DateTime Date { get; set; }
        [Column("user_id")]
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
    }
}
