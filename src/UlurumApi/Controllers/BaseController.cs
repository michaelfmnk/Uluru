using Microsoft.AspNetCore.Mvc;
using UlurumApi.Security;

namespace UlurumApi.Controllers
{
    public class BaseController : Controller
    {
        private readonly TokenService _tokenService;
        
        public BaseController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        protected string GetCleanToken()
        {
            string header = Request.Headers["Authorization"];
            return header.Substring(7);
        }

        protected int GetUserIdFromToken()
        {
            return _tokenService.GetUserIdFromToken(GetCleanToken());
        }
    }
}
