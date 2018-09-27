using System;
using UlurumApi.Dtos;
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
    }
}
