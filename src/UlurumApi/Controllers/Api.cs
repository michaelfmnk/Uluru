namespace UlurumApi.Controllers
{
    public static class Api
    {
        public const string Root = "/api";

        public static class Auth
        {
            public const string Login = "auth/login";
            public const string SignUp = "auth/sign-up";
        }

        public static class Post
        {
            public const string Posts = "posts";
            public const string PostsById = "posts/{post_id}";
        }

    }
}
