namespace UlurumApi.Dtos
{
    public class TokenContainer
    {
        public TokenContainer(string token)
        {
            Token = "Bearer " + token;
        }

        public string Token { get; set; }
    }
}
