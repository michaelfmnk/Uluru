using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

    }
}
