using System.Net;

namespace UlurumApi.Exceptions
{
    public class EntityNotFoundException : HttpCodeException
    {
        private new const HttpStatusCode Code = HttpStatusCode.NotFound;

        public EntityNotFoundException(string message) : base(Code, message)
        {
        }
    }
}
