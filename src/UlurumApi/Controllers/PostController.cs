using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class PostController : BaseController
    {
        private readonly PostService _postService;
        
        public PostController(PostService postService, TokenService tokenService) : base(tokenService)
        {
            _postService = postService;
        }

        [HttpPost(Api.Post.Posts)]
        public PostDto CreatePost([FromBody] PostDto post)
        {

            var userId = GetUserIdFromToken();
            return _postService.CreatePost(post, userId);
        }

        [HttpDelete(Api.Post.PostsById)]
        public ActionResult DeletePost(int postId)
        {
            var userId = GetUserIdFromToken();
            _postService.DeletePost(postId, userId);
            return new NoContentResult();
        }
        

        
    }
}
