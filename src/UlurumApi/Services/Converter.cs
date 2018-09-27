using UlurumApi.Dtos;
using UlurumApi.Entities;

namespace UlurumApi.Services
{
    public static class Converter
    {
        public static UserDto ToDto(User entity)
        {
            if (entity == null)
            {
                return null;
            }
            
            return new UserDto
            {
                Id = entity.UserId,
                Email = entity.Email,
                FirstName = entity.FirstName,
                LastName = entity.LastName
            };
        }

        public static PostDto ToDto(Post entity)
        {
            if (entity == null)
            {
                return null;
            }
            
            return new PostDto
            {
                Id = entity.PostId,
                Title = entity.Title,
                Date = entity.Date,
                UserId = entity.UserId
            };
        }

        public static Post ToEntity(PostDto dto)
        {
            return new Post
            {
                Title = dto.Title,
                Date = dto.Date,
                UserId = dto.UserId
            };
        }
        
    }
}
