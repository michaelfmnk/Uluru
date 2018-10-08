using System;
using System.Collections.Generic;

namespace UlurumApi.Dtos
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public UserBriefDto User { get; set; }
        public bool? Liked { get; set; }
        public IEnumerable<CommentReadDto> Comments { get; set; }
    }
}
