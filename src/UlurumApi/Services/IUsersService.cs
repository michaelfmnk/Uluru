using UlurumApi.Dtos;

namespace UlurumApi.Services
{

    public interface IUsersService
    {
        UserDto GetUser(string email);
    }
}
