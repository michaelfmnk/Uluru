using System.ComponentModel.DataAnnotations;

namespace UlurumApi.Dtos
{
    public class LoginRequestDto
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
