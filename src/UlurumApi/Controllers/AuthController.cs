using System;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Exceptions;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class AuthController : Controller
    {

        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost(Api.Auth.Login)]
        public TokenContainer Login([FromBody] LoginRequestDto request)
        {
            return _authService.Login(request.Email, request.Password);
        }

        [HttpPost(Api.Auth.SignUp)]
        public UserDto SignUp([FromBody] LoginRequestDto request)
        {
            return _authService.SignUp(request.Email, request.Password);
        }

        [HttpGet(Api.Auth.Login)]
        public TokenContainer Refresh()
        {
            string tokenHeader = Request.Headers["Authorization"];
            if (string.IsNullOrEmpty(tokenHeader))
            {
                throw new NotAuthorizedException("Authorization header is not present");
            }
            tokenHeader = tokenHeader.Substring(7);
            return _authService.RefreshToken(tokenHeader);
        }
        
    }
}
