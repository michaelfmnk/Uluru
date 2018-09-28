using System;
using UlurumApi.Dtos;
using UlurumApi.Entities;
using UlurumApi.Exceptions;
using UlurumApi.Repositories;

namespace UlurumApi.Services
{
    public class PostService
    {
        private readonly PostsRepository _postsRepository;

        public PostService(PostsRepository postsRepository)
        {
            _postsRepository = postsRepository;
        }

        public PostDto CreatePost(PostDto post)
        {
            var entity = Converter.ToEntity(post);
            entity.Date = DateTime.Now;
            
            _postsRepository.Save(entity);
            return Converter.ToDto(entity);
        }

        public void DeletePost(int postId, int userId)
        {
            var post = _postsRepository.FindById(postId);
            if (post.UserId != userId)
            {
                throw new ForbiddenException("You have no right to delete this post");
            }
            _postsRepository.Delete(post);
        }
    }
}
