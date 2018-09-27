using System;

namespace UlurumApi.Dtos
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
    }
}
