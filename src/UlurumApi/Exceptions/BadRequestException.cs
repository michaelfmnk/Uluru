using System;
using System.Net;

namespace UlurumApi.Exceptions
{
    public class BadRequestException : HttpCodeException
    {
        private new const HttpStatusCode Code = HttpStatusCode.BadRequest;

        public BadRequestException(string message) : base(Code, message)
        {
        }
    }
}
