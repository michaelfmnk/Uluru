using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("posts")]
    public class Post
    {
        [Key, Column("post_id")]
        public int PostId { get; set; }
        
        [Column("content")]
        public string Content { get; set; }
        
        [Column("date")]
        public DateTime Date { get; set; }
       
        [Column("user_id")]
        public int UserId { get; set; }
        
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
        
        [InverseProperty(nameof(Like.Post))]
        public virtual ICollection<Like> WhoLiked { get; set; }
    }
}
