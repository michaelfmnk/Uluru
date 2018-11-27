using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using UlurumApi.Properties;

namespace UlurumApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildHost(args).Run();
        }
        
        public static IWebHost BuildHost(string[] args) =>
                WebHost.CreateDefaultBuilder(args)
                    .UseStartup<Startup>()
                    .UseUrls("http://localhost:5050")
                    .Build();
    }
}
