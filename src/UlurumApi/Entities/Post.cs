using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UlurumApi.Entities
{
    [Table("posts")]
    public class Post
    {
        [Key, Column("post_id")]
        public int PostId { get; set; }
        
        [Column("title")]
        public string Title { get; set; }
        
        [Column("date")]
        public DateTime Date { get; set; }
       
        [Column("user_id")]
        public int UserId { get; set; }
        
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        
    }
}
