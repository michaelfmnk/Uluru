using UlurumApi.Dtos;
using UlurumApi.Entities;

namespace UlurumApi.Services
{
    
    public class ConverterService
    {
        public static UserDto toDto(User user)
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
