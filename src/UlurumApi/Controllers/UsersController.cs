using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class UsersController : BaseController
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService, TokenService tokenService) : base(tokenService)
        {
            _usersService = usersService;
        }

        [HttpGet(Api.User.Profile)]
        public UserDto getProfile()
        {
            var userId = GetUserIdFromToken();
            return _usersService.GetProfile(userId);
        }

        [HttpGet(Api.User.UserById)]
        public UserBriefDto getUser(int userId) => _usersService.GetBriefUser(userId);
    }
}
