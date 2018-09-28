using Microsoft.AspNetCore.Mvc;
using UlurumApi.Dtos;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Controllers
{
    [Route(Api.Root)]
    public class PostController : Controller
    {
        private readonly PostService _postService;
        private readonly TokenService _tokenService;
        
        public PostController(PostService postService, TokenService tokenService)
        {
            _postService = postService;
            _tokenService = tokenService;
        }

        [HttpPost(Api.Post.Posts)]
        public PostDto CreatePost([FromBody] PostDto post)
        {
            
            var userId = _tokenService.GetUserIdFromToken(GetCleanToken());
            post.UserId = userId;
            return _postService.CreatePost(post);
        }

        [HttpDelete(Api.Post.PostsById)]
        public ActionResult DeletePost(int postId)
        {
            var userId = _tokenService.GetUserIdFromToken(GetCleanToken());
            _postService.DeletePost(postId, userId);
            return new NoContentResult();
        }
        
        private string GetCleanToken()
        {
            string header = Request.Headers["Authorization"];
            return header.Substring(7);
        }
        
    }
}
