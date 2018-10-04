using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class FeedController : BaseController
    {
        private readonly PostService _postService;
        
        public FeedController(PostService postService, TokenService tokenService) : base(tokenService)
        {
            _postService = postService;
        }

        [HttpGet(Api.Feed)]
        public IEnumerable<PostDto> GetFeed()
        {
            var userId = GetUserIdFromToken();
            return _postService.GetFeedForUser(userId);
        }
        
    }
}
