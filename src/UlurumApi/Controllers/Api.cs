namespace UlurumApi.Controllers
{
    public static class Api
    {
        public const string Root = "/api";
        public const string Feed = "feed";

        public static class Auth
        {
            public const string Login = "auth/login";
            public const string SignUp = "auth/sign-up";
        }

        public static class Post
        {
            public const string Posts = "posts";
            public const string PostById = "posts/{post_id}";
            public const string PostByIdLikes = "posts/{post_id}/likes";
        }

    }
}
