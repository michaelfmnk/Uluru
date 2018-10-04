using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using UlurumApi.Dtos;
using UlurumApi.Entities;
using UlurumApi.Exceptions;
using UlurumApi.Repositories;

namespace UlurumApi.Services
{
    public class PostService
    {
        private readonly PostsRepository _postsRepository;
        private readonly UsersRepository _usersRepository;

        public PostService(PostsRepository postsRepository, UsersRepository usersRepository)
        {
            _postsRepository = postsRepository;
            _usersRepository = usersRepository;
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

        public IEnumerable<PostDto> GetFeedForUser(int userId)
        {
            var user = _usersRepository.FindById(userId);
            
            return user.Followed
                .Select(item => item.Followed)
                .SelectMany(item => item.Posts)
                .OrderByDescending(item => item.Date)
                .Select(Converter.ToDto);
        }
    }
}
