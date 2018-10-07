using System;

namespace UlurumApi.Dtos
{
    public class CommentReadDto
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string Content { get; set; }
        public UserBriefDto User { get; set; }
        public DateTime Date { get; set; }
    }
}
