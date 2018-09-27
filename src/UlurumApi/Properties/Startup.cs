using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Npgsql;
using UlurumApi.Controllers;
using UlurumApi.Repositories;
using UlurumApi.Security;
using UlurumApi.Services;

namespace UlurumApi.Properties
{
    public class Startup
    {
        public const string Key = "key";
        
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            
            AddServices(services, connectionString);
            
            var key = Configuration.GetValue<string>(Key);
            var sharedKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

            services.AddAuthentication(x =>
                {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = sharedKey,
                        ValidateAudience = false,
                        ValidateIssuer = false
                    };
                });

            Migrate(connectionString);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(item =>
                item.AllowCredentials()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin());
            app.UseAuthentication();
            app.UseMvc();
            app.Run(async context => { await context.Response.WriteAsync("Hello World!"); });
        }

        private static void Migrate(string connectionString)
        {
            var evolve = new Evolve.Evolve(new NpgsqlConnection(connectionString), Console.WriteLine)
            {
                Locations = new List<string>{ "db/Migrations" },
                IsEraseDisabled = false
            };
            evolve.Migrate();
        }

        private static void AddServices(IServiceCollection services, string connectionString)
        {
            services.AddMvc(config => { config.Filters.Add(typeof(CustomExceptionHandler)); });
            services.AddCors();
            services.AddTransient<IUsersService, UsersService>();
            services.AddScoped<TokenService>();
            services.AddScoped<UsersRepository>();
            services.AddScoped<AuthService>();
            
            services
                .AddEntityFrameworkNpgsql()
                .AddDbContext<ApiContext>(opt => opt.UseNpgsql(connectionString));
        }
    }
}
