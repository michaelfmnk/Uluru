using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using AngleSharp.Network.Default;
using Microsoft.AspNetCore.WebSockets.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UlurumApi.Entities;
using UlurumApi.Properties;
using UlurumApi.Repositories;

namespace UlurumApi.Security
{
    public class TokenService
    {
        private static readonly JwtSecurityTokenHandler Handler = new JwtSecurityTokenHandler();
        private readonly UsersRepository _usersRepository;
        private readonly byte[] _key;
        private const int Expires = 24;


        public TokenService(UsersRepository usersRepository, IConfiguration configuration)
        {
            _usersRepository = usersRepository;
            _key = Encoding.UTF8.GetBytes(configuration.GetValue<string>(Startup.Key));
        }
        
        public string createToken(User user)
        {
            var creds = new SigningCredentials(new SymmetricSecurityKey(_key), SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: user.UserId.ToString(),
                audience: "defaultAudience",
                expires: DateTime.Now.AddHours(Expires),
                signingCredentials: creds);
            return Handler.WriteToken(token);
        }

        public bool CanTokenBeRefreshed(string token, out User user)
        {
            var sharedKey = new SymmetricSecurityKey(_key);
            var parameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = sharedKey,
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateLifetime = false
            };
            Handler.ValidateToken(token, parameters, out var securityToken);
            user = _usersRepository.FindById(int.Parse(securityToken.Issuer));
            return securityToken.ValidTo > user.LastPasswordResetDate;
        }

        // ReSharper disable once MemberCanBeMadeStatic.Global
        public int GetUserIdFromToken(string cleanToken) => int.Parse(Handler.ReadToken(cleanToken).Issuer);
        
    }
}
