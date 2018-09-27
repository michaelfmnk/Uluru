using System;
using System.Net;

namespace UlurumApi.Exceptions
{
    public class ForbiddenException : HttpCodeException
    {
        private new const HttpStatusCode Code = HttpStatusCode.Forbidden;

        public ForbiddenException(string message) : base(Code, message)
        {
        }
    }
}
