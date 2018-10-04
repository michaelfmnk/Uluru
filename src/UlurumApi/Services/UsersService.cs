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
    }
}
