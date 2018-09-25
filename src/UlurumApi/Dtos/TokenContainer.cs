namespace UlurumApi.Dtos
{
    public class TokenContainer
    {
        public TokenContainer(string token)
        {
            Token = token;
        }

        public string Token { get; set; }
    }
}
