using UlurumApi.Dtos;
using UlurumApi.Repositories;

namespace UlurumApi.Services
{
    public class UsersService : IUsersService
    {

        private readonly UsersRepository _usersRepository;

        public UsersService(UsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        public UserDto GetUser(string email) => Converter.ToDto(_usersRepository.FindByEmail(email));
        
        public UserDto GetProfile(int userId)
        {
            var user = _usersRepository.FindById(userId);
            return Converter.ToDto(user);
        }

        public UserBriefDto GetBriefUser(int userId)
        {
            var user = _usersRepository.FindById(userId);
            return Converter.ToBriefDto(user);
        }
    }
}
