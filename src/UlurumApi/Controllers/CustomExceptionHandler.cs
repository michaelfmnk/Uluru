using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using UlurumApi.Exceptions;

namespace UlurumApi.Controllers
{
    public class CustomExceptionHandler : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var statusCode = HttpStatusCode.InternalServerError;
            var response = context.HttpContext.Response;

            var exceptionType = context.Exception.GetType();
            if (exceptionType == typeof(EntityNotFoundException))
            {
                statusCode = HttpStatusCode.NotFound;
            }

            if (exceptionType == typeof(NotAuthorizedException))
            {
                statusCode = HttpStatusCode.Unauthorized;
            }

            context.ExceptionHandled = true;
            response.StatusCode = (int) statusCode;
            response.ContentType = "application/json";
            var err = new ErrorContainer(context.Exception.Message);
            response.HttpContext.Response.WriteAsync(JsonConvert.SerializeObject(err));
        }
    }

    internal class ErrorContainer
    {
        // ReSharper disable once MemberCanBePrivate.Global
        public string Message { get; }

        public ErrorContainer(string message)
        {
            Message = message;
        }
    }
}
