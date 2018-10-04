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
            var message = "Internal Server Error";

            var exceptionType = context.Exception.GetType();

            if (typeof(HttpCodeException).IsAssignableFrom(exceptionType))
            {
                var ex = (HttpCodeException) context.Exception;
                statusCode = ex.Code;
                message = ex.Message;
            }

            context.ExceptionHandled = true;
            response.StatusCode = (int) statusCode;
            response.ContentType = "application/json";
            var err = new ErrorContainer(message);
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
