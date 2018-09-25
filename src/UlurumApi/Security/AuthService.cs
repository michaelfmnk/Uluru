using System;
using System.IdentityModel.Tokens.Jwt;
using DevOne.Security.Cryptography.BCrypt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using UlurumApi.Dtos;
using UlurumApi.Entities;
using UlurumApi.Exceptions;
using UlurumApi.Repositories;
using UlurumApi.Security;

namespace UlurumApi.Services
{
    public class AuthService
    {
        private readonly UsersRepository _usersRepository;
        private readonly TokenService _tokenService;

        public AuthService(UsersRepository usersRepository, TokenService tokenService)
        {
            _usersRepository = usersRepository;
            _tokenService = tokenService;
        }
        
        public TokenContainer Login(string email, string password)
        {
            var user = _usersRepository.GetByEmail(email);
            if (!BCryptHelper.CheckPassword(password, user.Password))
            {
                throw new NotAuthorizedException("User is not authorized");
            }
            
            var token = _tokenService.createToken(user);
            return new TokenContainer(token);
        }

        public UserDto SignUp(string requestEmail, string requestPassword)
        {
            var userFound = _usersRepository.ExistsByEmail(requestEmail);
            if (userFound)
            {
                throw new BadRequestException("Such user already exists");
            }

            var salt = BCryptHelper.GenerateSalt();
            var user = new User
            {
                Email = requestEmail,
                LastPasswordResetDate = DateTime.Now,
                Password = BCryptHelper.HashPassword(requestPassword, salt),
                Salt = salt
            };
            var savedUser = _usersRepository.Save(user);
            return Converter.ToDto(savedUser);
        }

        public TokenContainer RefreshToken(string tokenHeader)
        {
            var tokenCanBeRefreshed = _tokenService.CanTokenBeRefreshed(tokenHeader, out var user);
            if (!tokenCanBeRefreshed) throw new ForbiddenException("Token can not be refreshed");
            var token = _tokenService.createToken(user);
            return new TokenContainer(token);
        }
    }
}
