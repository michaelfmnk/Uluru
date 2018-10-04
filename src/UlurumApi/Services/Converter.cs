using UlurumApi.Dtos;
using UlurumApi.Entities;

namespace UlurumApi.Services
{
    public static class Converter
    {
        public static UserDto ToDto(User entity)
        {
            if (entity == null) return null;
            return new UserDto
            {
                Id = entity.UserId,
                Email = entity.Email,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                AvatarId = entity.AvatarId
                
            };
        }

        public static PostDto ToDto(Post entity)
        {
            if (entity == null) return null;
            return new PostDto
            {
                Id = entity.PostId,
                Content = entity.Content,
                Date = entity.Date,
                User = ToBriefDto(entity.User)
            };
        }

        public static Post ToEntity(PostDto dto)
        {
            return new Post
            {
                Content = dto.Content,
                Date = dto.Date
            };
        }

        private static UserBriefDto ToBriefDto(User entity)
        {
            if (entity == null) return null;
            return new UserBriefDto
            {
                Id = entity.UserId,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                AvatarId = entity.AvatarId
            };
        }
        
    }
}
