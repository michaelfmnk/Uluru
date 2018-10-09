using UlurumApi.Dtos;

namespace UlurumApi.Services
{

    public interface IUsersService
    {
        UserDto GetUser(string email);
        UserBriefDto GetBriefUser(int userId);
        UserDto GetProfile(int userId);
    }
}
