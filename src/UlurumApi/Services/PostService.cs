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
        private readonly LikeRepository _likeRepository;

        public PostService(PostsRepository postsRepository, UsersRepository usersRepository, 
            LikeRepository likeRepository)
        {
            _postsRepository = postsRepository;
            _usersRepository = usersRepository;
            _likeRepository = likeRepository;
        }

        public PostDto CreatePost(PostDto post, int userId)
        {
            var entity = Converter.ToEntity(post);
            entity.UserId = userId;
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

        public void LikePost(int postId, int userId)
        {
            var like = new Like
            {
                UserId = userId,
                PostId = postId
            };
            _likeRepository.Save(like);
        }

        public void DeleteLike(int postId, int userId)
        {
            var user = _usersRepository.FindById(userId);
            var likedPost = user.Likes.First(like => like.PostId == postId);
            user.Likes.Remove(likedPost);
            _usersRepository.Save(user);
        }
    }
}
