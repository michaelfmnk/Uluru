using UlurumApi.Dtos;
using UlurumApi.Entities;

namespace UlurumApi.Services
{
    public static class Converter
    {
        public static UserDto ToDto(User user)
        {
            return new UserDto
            {
                Id = user.UserId,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }
        
    }
}
