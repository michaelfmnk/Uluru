using System;
using System.Net;

namespace UlurumApi.Exceptions
{
    public class NotAuthorizedException : HttpCodeException
    {
        private new const HttpStatusCode Code = HttpStatusCode.Unauthorized;
        public NotAuthorizedException(string message) : base(Code, message)
        {
        }
    }
}
