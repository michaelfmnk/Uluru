using System;
using System.Net;

namespace UlurumApi.Exceptions
{
    public abstract class HttpCodeException : Exception
    {
        public HttpStatusCode Code { get; }

        protected HttpCodeException(HttpStatusCode code, string msg) : base(msg)
        {
            Code = code;
        }
        
    }
}