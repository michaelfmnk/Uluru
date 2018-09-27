namespace UlurumApi.Controllers
{
    public static class Api
    {
        public const string Root = "/api";

        public static class User
        {
            public const string UserById = "users/{userId}";
            public const string UserPosts = "users/{user_id}/posts";
        }

        public static class Auth
        {
            public const string Login = "auth/login";
            public const string SignUp = "auth/sign-up";
        }

        public static class Post
        {
            public const string Posts = "posts";
        }

    }
}
